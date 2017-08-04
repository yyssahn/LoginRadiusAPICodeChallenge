  import { Routes, RouterModule } from '@angular/router';
import { LRRegisterComponent } from './lr-register.component';
import { LRVerificationComponent } from './lr-verification.component';
import { LRAuthenticateComponent } from './lr-authenticate.component';
import { LRForgotPasswordComponent } from './lr-forgotpassword.component';
import { LRLoginComponent } from './lr-login.component';
import { LRSocialComponent } from './lr-social.component';
const appRoutes: Routes = [
    { path: 'register', component: LRRegisterComponent },
    { path: 'authenticate', component: LRAuthenticateComponent},
    { path: 'forgot-password', component : LRForgotPasswordComponent},
    { path: 'login', component : LRLoginComponent},
    { path: 'social', component : LRSocialComponent},

    { path: 'verification', component: LRVerificationComponent},
];


export const routing = RouterModule.forRoot(appRoutes);
