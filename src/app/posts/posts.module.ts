import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { HomePostComponent } from './home-post/home-post.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AllPostsComponent,
    CreatePostComponent,
    PostComponent,
    HomePostComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule, PostsRoutingModule, FormsModule
  ]
})
export class PostsModule { }
