import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navview',
  templateUrl: './navview.component.html',
  styleUrls: ['./navview.component.css']
})
export class NavviewComponent implements OnInit {
  viewMode = 'test';
  constructor() { }

  ngOnInit() {
  }

}
