import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  urlPosts = `${environment.api}/posts`

  constructor(
    private _http: HttpClient
  ) { }

  getPosts() {
    return this._http.get(`${this.urlPosts}`)
  }

  getPost(idPost: number) {
    return this._http.get(`${this.urlPosts}/${idPost}`)
  }

  createPost(post: Post) {
    return this._http.post(`${this.urlPosts}`, post);
  }

  deletePost(idPost: number) {
    return this._http.delete(`${this.urlPosts}/${idPost}`)
  }

  updatePost(post) {
    return this._http.put(`${this.urlPosts}/${post.id}`, post)
  }
}
