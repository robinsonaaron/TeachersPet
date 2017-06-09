import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService, Student } from '../../providers/data-service';

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

  user: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentCreation');
  }


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


}
