import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsModule } from '../posts/posts.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, LogoutComponent, ProfileComponent],
  imports: [
    CommonModule, UserRoutingModule, RouterModule, FormsModule, ReactiveFormsModule, PostsModule
  ]
})
export class UserModule {}
