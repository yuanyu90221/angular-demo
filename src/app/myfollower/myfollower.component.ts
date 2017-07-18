import { FollowerService } from './../services/follower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'myfollower',
  templateUrl: './myfollower.component.html',
  styleUrls: ['./myfollower.component.css']
})
export class MyfollowerComponent implements OnInit {
  followers: any[];

  constructor(private service: FollowerService) { }

  ngOnInit() {
     this.service.getAll()
       .subscribe(followers => this.followers = followers);
  }

}
