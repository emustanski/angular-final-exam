import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/types/post';
import { LoginAuthUser } from 'src/app/types/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentPost: Post = {} as Post;
  user: LoginAuthUser = {} as LoginAuthUser;
  showEditButtons: boolean = false;
  ownerId: string = '';
  loggedUserId: string = '';

  get loggedUser(): LoginAuthUser | undefined {
    return this.userService.user;
  }

  constructor(
    private route: ActivatedRoute,
    public userService: UserService,
    public postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      const postId = data['postId'];

      this.postService.getPost(postId).subscribe((post) => {
        this.currentPost = post;
        this.ownerId = post._ownerId;
      });
    });

    if (this.loggedUser) {
      this.user = this.loggedUser;
      this.loggedUserId = this.loggedUser._id;
    }
  }


  deleteHandler(): void {
    this.postService.deletePost(this.currentPost._id).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

}


