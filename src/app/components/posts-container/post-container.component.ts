import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { LoadPosts } from 'src/app/redux/actions/post.actions';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {
  posts: Array<Post>;
  subPost: Subscription;
  loading = false;
  systemError = false;

  constructor(
    private _postsService: PostsService,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.subscribePosts();
    this.loadPost()
  }

  subscribePosts() {
    this.subPost = this.store.pipe(select('posts')).subscribe(
      (posts: any) => {
        this.posts = posts?.filterList;
      }
    );
  }

  loadPost() {
    this.loading = true;
    this._postsService.getPosts().subscribe(
      (posts: Array<Post>) => {
        const action = new LoadPosts(posts);
        this.store.dispatch(action);
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.systemError = true;
      }
    );
  }
}
