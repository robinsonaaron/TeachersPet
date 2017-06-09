import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
import {  StudentsList} from '../../pages/students-list/students-list';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public  dataService: DataService) {
  }

  student: any;



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
}
