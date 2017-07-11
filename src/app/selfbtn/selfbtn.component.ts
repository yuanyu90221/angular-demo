import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'selfbtn',
  templateUrl: './selfbtn.component.html',
  styleUrls: ['./selfbtn.component.css']
})
export class SelfbtnComponent implements OnInit {
  @Input('canSave') canSave: boolean;
  constructor() { }

  ngOnInit() {
  }

}
