import { Component } from '@angular/core';
import { LikeChangedEventArgs } from './likes/likes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  post = {
    title: 'Title',
    isLike: true
  };
  tweet = {
    likesCount: 10,
    isLiked: false
  };
  onLikeChange(eventArgs: LikeChangedEventArgs ) {
    console.log('Like changed : ', eventArgs);
  }
}
