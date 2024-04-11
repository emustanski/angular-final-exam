import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { AuthGuard } from '../guards/auth.guard';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
 { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard]},
 {
  path: 'all-posts', component: AllPostsComponent,
  children: [
    { path: ':postId', component: DetailsComponent}
  ]
 },
//  { path: 'all-posts', component: AllPostsComponent},
//  { path: ''}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
