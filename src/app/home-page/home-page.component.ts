import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  archives = [
    {year: 2017, month: 1},
    {year: 2017, month: 2},
    {year: 2017, month: 3}
  ];
  constructor(private router: Router) {
  }
}
