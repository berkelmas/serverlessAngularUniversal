import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginrequiredpageComponent } from './loginrequiredpage/loginrequiredpage.component';

const firebaseConfig = {
  apiKey: "AIzaSyDSvICw3uJVd45aq-SuZDD6_lgZMxCAkgo",
  authDomain: "angulardeneme-66aba.firebaseapp.com",
  databaseURL: "https://angulardeneme-66aba.firebaseio.com",
  projectId: "angulardeneme-66aba",
  storageBucket: "angulardeneme-66aba.appspot.com",
  messagingSenderId: "236947855033",
  appId: "1:236947855033:web:e87dc7aa9d5c7539"
};

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginrequiredpageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    AngularFireAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
