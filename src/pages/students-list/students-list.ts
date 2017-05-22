import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentDetail } from "../student-detail/student-detail";


@IonicPage()
@Component({
  selector: 'page-students-list',
  templateUrl: 'students-list.html',
})
export class StudentsList implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsList');
  }

  ngOnInit() {

  }

  navToStudentDetail() {
    this.navCtrl.push(StudentDetail);
  }
}
