import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { ClassCreationPage } from '../class-creation/class-creation';

import { DataService } from '../../providers/data-service';
import { StudentsList } from "../students-list/students-list";
import {LoginPage} from "../login-page/login-page";




@Component({
  selector: 'page-class',
  templateUrl: 'class-list.html'
})
export class ClassListPage implements OnInit {

  user: any = 'Aaron Robinson';

  classSelected: any;
  classes: any;
  deleteToggle = false;

  constructor(public navCtrl: NavController, public dataService: DataService, public alert: AlertController) {

  }

  createClass() {
    this.navCtrl.push(ClassCreationPage);
  }

  importClasses() {
    this.dataService.getClassList().then(res => {
      this.classes = res;
    })
  }

  toggleDeleteButton() {
    if (!this.deleteToggle) {
      this.deleteToggle = true;
    }
    else this.deleteToggle = false;
  }

  confirmDelete() {
    let alert = this.alert.create({
      title: 'Delete?',
      message: "Are you sure you want to delete this class?",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancelled')
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.dataService.removeClass(this.classSelected);
            this.importClasses();
          }
        }
      ]
    })
    alert.present();
  }

  classClicked(className) {
    this.dataService.setClass(className).then(res => this.navCtrl.push(StudentsList));

  }

  ngOnInit() {
    this.importClasses();
  }

  ionViewWillEnter(){
    this.importClasses();
  }

  signOut(){
    this.dataService.signOut();

  }

  navToLoginPage(){
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    this.dataService.getUserAuthStatus().subscribe(user => {
        console.log(user);
        if (user == null)
        {
          this.navToLoginPage();
        }

      }
    );
  }
}

