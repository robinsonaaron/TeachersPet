import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { StudentDetail } from "../student-detail/student-detail";

import {StudentCreation} from "../student-creation/student-creation";
import { DataService } from '../../providers/data-service';



@IonicPage()
@Component({
  selector: 'page-students-list',
  templateUrl: 'students-list.html',
})
export class StudentsList implements OnInit {

  deleteToggle = false;
  students: any;
  studentSelected: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService: DataService, public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsList');
  }


  navToStudentDetail() {
    this.navCtrl.push(StudentDetail);
  }
  createStudent() {
    this.navCtrl.push(StudentCreation);
  }



  importClasses() {
    this.dataService.getStudentList().then(res => {
      this.students = res;
    })
  }


  ngOnInit() {
    this.importClasses();
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
            this.dataService.removeClass(this.studentSelected);
            this.importClasses();
          }
        }
      ]
    })
    alert.present();
  }
  ionViewWillEnter(){
    this.importClasses();
  }



}
