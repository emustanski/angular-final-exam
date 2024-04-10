import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { PostService} from 'src/app/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent {
  constructor(private postService: PostService, private router: Router) {}
  createPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const post = form.value;
    this.postService.createPost(post).subscribe(() => {
      this.router.navigate(['/all-posts']);
    })
  }
}
