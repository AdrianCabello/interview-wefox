import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post
  post_id: Number;


  constructor(
    private _postsService: PostsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.loadPost()
  }

  loadPost(){
    this.post_id = Number(this.route.snapshot.paramMap.get('id'));
    this.getPost()
  }

  getPost() {
    this._postsService.getPost(this.post_id).subscribe(
      (post: Post) => {
        this.post = post;
      }
    );
  }
}
