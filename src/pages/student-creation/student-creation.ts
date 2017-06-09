import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataService,Student } from '../../providers/data-service';





/**
 * Generated class for the StudentCreation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-student-creation',
  templateUrl: 'student-creation.html',
})
export class StudentCreation {
  studentName: string;
  slackID : string;
  email : string;
  githudID : string;






  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataService) {

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentCreation');
  }

  /*refreshStudentList() {
    this.dataService.getStudentList().then(studentList => this.studentList = studentList);
  }




  addStudent(){
    //this.dataService.addStudent(this.studentName);
    this.dataService.addStudent(this.student.Name).then(() => this.refreshStudentList());
    this.navCtrl.pop();
  }*/

  addStudent() {
      let student:Student = new Student();
      student.Email = this.email;
      student.GithubID = this.githudID;
      student.ImageURL = "";
      student.SlackID = this.slackID;
      student.Name = this.studentName;

    this.dataService.addStudent(student).then(res => this.navCtrl.pop());

  }



}
