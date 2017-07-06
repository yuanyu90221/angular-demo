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
    <div (click)="onDivClick()">
      <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
    </div>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/><br/>
    {{ course.title | uppercase  }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'2.1-1' }} <br/>
    {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate' }} <br/>
    <input [(ngModel)]="text" (keyup)="onKeyIn()"/><br/>
    {{ text | cap }}
  `
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  colSpan;
  isActive;
  email = 'me@example.com';
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 790.95,
    releaseDate: new Date(2017, 3, 1)
  };
  text = '';
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
    this.colSpan = 2;
    this.isActive = true;
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('Button is click!!', $event);
  }

  onDivClick() {
    console.log('Div was clicked!!');
  }
  onKeyUp() {
    console.log(this.email);
  }
  onKeyIn() {
    console.log(this.text);
  }
}
