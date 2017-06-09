import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login-page/login-page";
import { ClassListPage } from '../pages/class-list/class-list';
import { AssignmentsPage } from '../pages/assignments/assignments';
import { AssignmentCreationPage } from '../pages/assignmentCreation/assignmentCreation';
import { DataService } from '../providers/data-service';


// for testing purposes, please remove later
import { DataServiceExamplePage } from '../pages/data-service-example/data-service-example'; // used for example usage and testing



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage 
  // rootPage: any = DataServiceExamplePage;  // used for testing

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public dataService: DataService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Classes', component: ClassListPage },
      { title: 'Assignments', component: AssignmentsPage },
    ];

  }

  logOut(){
    this.dataService.signOut();
    this.nav.popToRoot();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
