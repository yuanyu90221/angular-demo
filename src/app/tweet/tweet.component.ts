import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'like',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  constructor() {
    this.isActive = false;
  }

  ngOnInit() {
  }

  onClick() {
    this.isActive = !this.isActive;
    this.likesCount += (this.isActive) ? 1 : -1;
  }
}
