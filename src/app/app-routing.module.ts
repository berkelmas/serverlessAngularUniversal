import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginrequiredpageComponent } from './loginrequiredpage/loginrequiredpage.component';

import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  canActivate
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToMain = redirectUnauthorizedTo(['']);

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'loginrequired', component: LoginrequiredpageComponent, ...canActivate(redirectUnauthorizedToMain)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
