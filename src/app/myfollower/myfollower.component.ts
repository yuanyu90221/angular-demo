import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private service: FollowerService) { }

  ngOnInit() {
     Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
     ])
     .switchMap(combined => {
        const id = combined[0].get('id');
        const page = combined[1].get('page');

        return this.service.getAll();
     })
     .subscribe(followers => this.followers = followers);

  }

}
