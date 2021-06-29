import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post
  post_id: number;
  loading: Boolean;

  constructor(
    private _postsService: PostsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadPost()
  }

  loadPost() {
    this.loading = true;
    this.activatedRoute.params.pipe(
      switchMap((p: Params) => {
        this.post_id = p['id'];
        return this._postsService.getPost(this.post_id)
      }
      ))
      .subscribe((post: Post) => {
        this.post = post;
        this.loading = false;
      })
  }
}
