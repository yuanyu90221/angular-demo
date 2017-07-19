import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router: Router) { }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest'}
    });
  }
  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // this.route.paramMap
    //   .subscribe(params => {
    //     const id = +params.get('id'); // +用來把 string轉成 number
    //     console.log(id);
    //   });
  }

}
