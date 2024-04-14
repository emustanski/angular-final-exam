import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { HomePostComponent } from './home-post/home-post.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';



@NgModule({
  declarations: [
    AllPostsComponent,
    CreatePostComponent,
    PostComponent,
    HomePostComponent,
    HomeComponent,
    DetailsComponent,
    PostDetailsComponent,
    MyPostsComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule, PostsRoutingModule, FormsModule, ReactiveFormsModule
  ],
  exports: [PostComponent,DetailsComponent]
})
export class PostsModule { }
