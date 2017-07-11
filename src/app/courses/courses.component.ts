import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses ;
  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.courses.push({ id: 4, name: 'course4'});
  }

  onRemove(course) {
   const index =  this.courses.indexOf(course);
   this.courses.splice(index, 1);
  }

  onChange(course) {
   course.name = 'Changed';
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
