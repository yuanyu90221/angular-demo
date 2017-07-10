import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css'],
  // styles: [
  //   `
  // .glyphicon {
  //   color: green;
  // }
  //  `
  // ],
  encapsulation: ViewEncapsulation.Emulated
})
export class LikesComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('is-like') isLike: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('change') click = new EventEmitter();
  constructor() {

  }

  ngOnInit() {
  }

  onClick() {
    this.isLike = !this.isLike;
    this.click.emit({newValue: this.isLike});
  }
}

export interface LikeChangedEventArgs {
  newValue: boolean
}
