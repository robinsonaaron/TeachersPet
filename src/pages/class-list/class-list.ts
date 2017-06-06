import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ClassCreationPage } from '../class-creation/class-creation';
import { ClassService } from '../../providers/class-service';
<<<<<<< HEAD
import {StudentsList} from "../students-list/students-list";
=======
>>>>>>> 75c0f3aeec90469e5c88174c444e6c1ad446908b

@Component({
    selector: 'page-class',
    templateUrl: 'class-list.html'
})
export class ClassListPage implements OnInit {

    classes: any;
    deleteToggle = false;

    constructor(public navCtrl: NavController, public classService: ClassService) {

    }

    createClass() {
        this.navCtrl.push(ClassCreationPage);
    }

    importClasses() {
        this.classes = this.classService.classes;
    }

    toggleDeleteButton(){
      if(!this.deleteToggle){
        this.deleteToggle = true;
      }
      else this.deleteToggle = false;
    }

    confirmDelete(){
      for(let i = 0; i < this.classes.length; i++){
        if(this.classes[i].selected){
          console.log(this.classes[i].name);
        }
      }
    }

<<<<<<< HEAD
    classSelected()
    {
      this.navCtrl.push(StudentsList);
    }

=======
>>>>>>> 75c0f3aeec90469e5c88174c444e6c1ad446908b
    ngOnInit(){
        this.importClasses();
    }


<<<<<<< HEAD
}
=======
}
>>>>>>> 75c0f3aeec90469e5c88174c444e6c1ad446908b
