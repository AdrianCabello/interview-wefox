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

  getPost(idPost: Number) {
    return this._http.get(`${this.urlPosts}/${idPost}`)
  }

  createPost(post: Post) {
    return this._http.post(`${this.urlPosts}`, post);
  }
}
