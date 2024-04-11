import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';
import { CreatePost, Post } from '../types/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = environment.apiUrl;
  USER_KEY = '[user]';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(`${this.apiUrl}/data/posts`)
  }

  getPost(postId: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/data/posts/${postId}`)
  }

  getAllByOwner(ownerId: string): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${this.apiUrl}/data/posts/?where=_ownerId%3D%22${ownerId}%22`
    );
  }

  createPost(post: CreatePost): Observable<CreatePost> {
    const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
    const user = JSON.parse(localStorageUser);
    const accessToken = user.accessToken;

    const headers = new HttpHeaders({
      'X-Authorization': accessToken,
      'Content-Type': 'application/json'
    });

    const options = { headers };

    return this.http.post<CreatePost>(
      `${this.apiUrl}/data/posts`,
      post,
      options
    )
  }

  editPost(
    postId: string,
    post: Post
  ): Observable<Post> {
    const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
    const user = JSON.parse(localStorageUser);
    const accessToken = user.accessToken;

    const headers = new HttpHeaders({
      'X-Authorization': accessToken,
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.put<Post>(
      `${this.apiUrl}/data/posts/${postId}`,
      post,
      options
    );
  }

  deletePost(postId: string): Observable<Post> {
    const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
    const user = JSON.parse(localStorageUser);
    const accessToken = user.accessToken;

    const headers = new HttpHeaders({
      'X-Authorization': accessToken,
    });
    const options = { headers };
    return this.http.delete<Post>(
      `${this.apiUrl}/data/posts/${postId}`,
      options
    );
  }
}
