import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Array<Post>

  constructor(private _postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this._postsService.getPosts().subscribe(
      (posts: Array<Post>) => {
        this.posts = posts;
      }
    );
  }
}
