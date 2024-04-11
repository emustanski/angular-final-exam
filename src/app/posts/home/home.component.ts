import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
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
