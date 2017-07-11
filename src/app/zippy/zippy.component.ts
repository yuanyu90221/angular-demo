import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent  {

  @Input('title') title: string;
  isCollapse: boolean;

  toggle() {
    this.isCollapse = !this.isCollapse;
  }
}
