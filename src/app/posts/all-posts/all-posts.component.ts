import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  post: Post[] = []

    constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (posts) => {
        posts.sort((a, b) => {
          return b._createdOn - a._createdOn;
        })

        this.post = posts;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}
