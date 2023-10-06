import { Component, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

<<<<<<< HEAD
  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];
=======
  courses = COURSES;

  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  startDate = new Date(2000, 0, 1)

  price = 9.99

  rate = 0.67

  title = COURSES[0].description

  course = COURSES[0]


  onCourseSelected(course: Course) {
    console.log(this.card)
  }
>>>>>>> d0c2886d393d7573810bd9332ffa4b9424bb53b1

}
