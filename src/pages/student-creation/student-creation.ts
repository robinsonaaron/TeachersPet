import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { DataService } from '../../providers/data-service';
import {  StudentsList} from '../../pages/students-list/students-list';
=======
import { DataService, Student } from '../../providers/data-service';
>>>>>>> upstream/master

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
  studentName: any;

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams, public  dataService: DataService) {
=======
  user: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataService) {
>>>>>>> upstream/master
  }

  student: any;



  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentCreation');
  }

  /*refreshStudentList() {
    this.dataService.getStudentList().then(studentList => this.studentList = studentList);
  }


<<<<<<< HEAD

  addStudent(){
    //this.dataService.addStudent(this.studentName);
    this.dataService.addStudent(this.student.Name).then(() => this.refreshStudentList());
    this.navCtrl.pop();
  }*/
=======
  addStudent() {
      let student:Student = new Student();
      student.Email = "";
      student.GithubID = "";
      student.ImageURL = "";
      student.SlackID = "";
      student.Name = this.studentName;

    this.dataService.addStudent(student);
    this.navCtrl.pop();
  }


>>>>>>> upstream/master
}
