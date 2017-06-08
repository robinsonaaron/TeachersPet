import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentDetail } from "../student-detail/student-detail";

import {StudentCreation} from "../student-creation/student-creation";
import { DataService } from '../../providers/data-service';



@IonicPage()
@Component({
  selector: 'page-students-list',
  templateUrl: 'students-list.html',
})
export class StudentsList implements OnInit {

  students: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService: DataService) {
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



}
