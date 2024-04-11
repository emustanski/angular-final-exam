import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-home-post',
  templateUrl: './home-post.component.html',
  styleUrls: ['./home-post.component.css']
})
export class HomePostComponent {

  @Input('post') post = {} as Post;
}
