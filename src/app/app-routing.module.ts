import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginrequiredpageComponent } from './loginrequiredpage/loginrequiredpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';

import {
  redirectUnauthorizedTo,
  canActivate,
  redirectLoggedInTo
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToMain = redirectUnauthorizedTo(['']);
const redirectLoggedInToMain = redirectLoggedInTo([''])

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'loginrequired', component: LoginrequiredpageComponent, ...canActivate(redirectUnauthorizedToMain)},
  {path: 'login', component: LoginpageComponent, ...canActivate(redirectLoggedInToMain)},
  {path: 'register', component: RegisterpageComponent, ...canActivate(redirectLoggedInToMain)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
