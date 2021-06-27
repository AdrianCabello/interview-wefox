import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {
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
