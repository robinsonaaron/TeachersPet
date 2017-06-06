import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ClassListPage } from '../pages/class-list/class-list';
import { ClassCreationPage } from '../pages/class-creation/class-creation';
<<<<<<< HEAD
=======

import { ClassService } from '../providers/class-service';
>>>>>>> 75c0f3aeec90469e5c88174c444e6c1ad446908b

import { ClassService } from '../providers/class-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from "../pages/login-page/login-page";
import { StudentsList } from "../pages/students-list/students-list";
import { StudentDetail } from "../pages/student-detail/student-detail";
import { AssignmentsPage } from "../pages/assignments/assignments";

import { DataService } from '../providers/data-service';
import { DataServiceExamplePage } from '../pages/data-service-example/data-service-example';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
<<<<<<< HEAD
    LoginPage,
    StudentsList,
    StudentDetail,
    ClassListPage,
    ClassCreationPage,

    DataServiceExamplePage,
    AssignmentsPage

=======
    ClassListPage,
    ClassCreationPage
>>>>>>> 75c0f3aeec90469e5c88174c444e6c1ad446908b
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
<<<<<<< HEAD
    LoginPage,
    StudentsList,
    StudentDetail,
    ClassListPage,
    ClassCreationPage,
    DataServiceExamplePage,
    AssignmentsPage
=======
    ClassListPage,
    ClassCreationPage
>>>>>>> 75c0f3aeec90469e5c88174c444e6c1ad446908b
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ClassService,
    DataService

=======
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClassService
>>>>>>> 75c0f3aeec90469e5c88174c444e6c1ad446908b
  ]
})
export class AppModule { }
