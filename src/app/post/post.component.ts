import { BadInputError } from './../common/bad-input-errors';
import { NotFoundError } from './../common/not-found-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppError } from 'app/common/app-error';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value};
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          console.log(post);
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInputError) {
            // this.form.setErrors(error.originalError);
          }
          // tslint:disable-next-line:one-line
          else {
            throw error;
          }
        });
  }

  updatePost(post) {
    // only have patch the property you want to update
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
    // post need to use a complete object
    // this.http.post(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError) {
            alert('This post already been deleted');
          }
          // tslint:disable-next-line:one-line
          else {
            throw error;
          }
        });
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }
}
