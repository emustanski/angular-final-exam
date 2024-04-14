import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/types/post';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService, private userService: UserService) { }

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