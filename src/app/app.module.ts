import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountState } from './app.state';

const NGXS_IMPORTS = [
  NgxsModule.forRoot([CountState], {
    developmentMode: !environment.production,
    selectorOptions: {
      // These Selector Settings are recommended in preparation for NGXS v4
      // (See above for their effects)
      suppressErrors: false,
      injectContainerState: false
    },
    compatibility: {
      strictContentSecurityPolicy: true
    },
  }),
  NgxsRouterPluginModule.forRoot(),
  NgxsLoggerPluginModule.forRoot({
    collapsed: true,
    disabled: environment.production,
  }),
  NgxsReduxDevtoolsPluginModule.forRoot({
    disabled: environment.production,
  }),
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...NGXS_IMPORTS,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
