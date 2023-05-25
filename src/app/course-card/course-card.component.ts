import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';
;

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  
  @Input()
  course: Course;

  @Input()
  cardIndex!: number

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {

  }

  ngOnInit(): void {

  }

  isImageAvailable() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if(this.course.category === "BEGINNER") {
      return 'beginner'
    }
  }

  onCourseViewed() {
    console.log("card component - button clicked!")
    this.courseSelected.emit(this.course)
  }

  cardStyles() {
    return { 'text-decoration': 'underline' }
  }


}
