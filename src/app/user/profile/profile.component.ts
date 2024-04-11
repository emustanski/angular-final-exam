import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/types/post';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  posts: Post[] = [];

  constructor(private postService: PostService, private userService: UserService) {}

  ngOnInit(): void {
    const ownerId = this.userService.user?._id || '';

    this.postService.getAllByOwner(ownerId).subscribe({
      next: (posts) => {
        posts.sort((a, b) => {
          return b._createdOn - a._createdOn;
        });
        this.posts = posts;
      },
      error: (err) => {
        console.error('Error:', err)
      }
    })
  }
}
  
