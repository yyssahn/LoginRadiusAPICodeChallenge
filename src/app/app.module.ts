import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { routing } from './app.routing';
import { LRVariableService } from './variables.service';
import { WindowRefService } from './windowRef.service';


import { AppComponent }  from './app.component';
import { LRRegisterComponent } from './lr-register.component';
import { LRVerificationComponent } from './lr-verification.component';
import { LRAuthenticateComponent } from './lr-authenticate.component';
import { LRForgotPasswordComponent } from './lr-forgotpassword.component';
import { LRLoginComponent } from './lr-login.component';
import { LRSocialComponent } from './lr-social.component';
@NgModule({
  imports:      [
  BrowserModule,
  routing,
  FormsModule,
  HttpModule
  ],
  providers:[
    LRVariableService,
    WindowRefService,
    LRLoginComponent
  ],
  declarations: [
  AppComponent,
  LRRegisterComponent,
  LRVerificationComponent,
  LRAuthenticateComponent,
  LRForgotPasswordComponent,
  LRLoginComponent,
  LRSocialComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
