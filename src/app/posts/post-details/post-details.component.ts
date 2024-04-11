import { Component, Input } from '@angular/core';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  @Input() currentPost!: Post


}
