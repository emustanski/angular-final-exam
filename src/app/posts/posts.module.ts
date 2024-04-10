import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllPostsComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule, PostsRoutingModule, FormsModule
  ]
})
export class PostsModule { }
