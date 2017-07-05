import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'courses',
  template: `
    <h2>{{title}}</h2>
    <h2 [textContent]="title"></h2>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
  `
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  colSpan;
  isActive;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
    this.colSpan = 2;
    this.isActive = true;
  }
}
