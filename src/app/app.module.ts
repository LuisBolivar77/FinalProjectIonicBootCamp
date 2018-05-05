import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthProvider } from '../providers/auth/auth';
import { LogInPage } from '../pages/log-in/log-in';
import { RegisterPage } from '../pages/register/register';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

const confi = {
  apiKey: "AIzaSyAtIG2pGGnFme4hloCL59ZOa-VbqTsSQE8",
  authDomain: "finalproject-ionicbootcamp.firebaseapp.com",
  databaseURL: "https://finalproject-ionicbootcamp.firebaseio.com",
  projectId: "finalproject-ionicbootcamp",
  storageBucket: "",
  messagingSenderId: "835958900633"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LogInPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule, 
    AngularFireModule.initializeApp(confi)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LogInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider, HttpClient 
  ]
})
export class AppModule {}
