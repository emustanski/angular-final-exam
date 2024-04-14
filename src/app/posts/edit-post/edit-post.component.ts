import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  currentPost: Post = {} as Post;

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private route: ActivatedRoute, private location: Location) {
    this.createForm({ ...this.currentPost });
  }

  createForm(formValue: Post) {
    this.form = this.formBuilder.group({
      title: [formValue.title, [Validators.required]],
      content: [formValue.content],
      img: [formValue.img],
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      const postId = data['postId'];
      this.postService.getPost(postId).subscribe((res) => {
        this.createForm({ ...res })
        this.currentPost = res;
      })
    })
  }

  editPostHandler(): void {
    if (this.form.invalid) {
      return;
    }

    this.postService.editPost(this.currentPost._id, this.form.value).subscribe()

    this.location.back();
  }

}
