import { FollowerService } from './services/follower.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { Capitalize } from './capitalize.pipe';
import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { StarComponent } from './star/star.component';
import { LikesComponent } from './likes/likes.component';
import { PanelComponent } from './panel/panel.component';
import { TweetComponent } from './tweet/tweet.component';
import { NavviewComponent } from './navview/navview.component';
import { SelfbtnComponent } from './selfbtn/selfbtn.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswdFormComponent } from './change-passwd-form/change-passwd-form.component';
import { HttpModule } from '@angular/http';
import { PostComponent } from './post/post.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    StarComponent,
    Capitalize,
    LikesComponent,
    PanelComponent,
    TweetComponent,
    NavviewComponent,
    SelfbtnComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswdFormComponent,
    PostComponent,
    MyfollowerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    FollowerService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
