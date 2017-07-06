import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  active = false;
  constructor() {
    this.active = false;
  }

  ngOnInit() {
  }

  onClick() {
    this.active = !this.active;
  }
}
