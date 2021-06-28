import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { LoadPosts } from 'src/app/redux/actions/post.actions';
import { SetActive } from 'src/app/redux/actions/navigation.actions';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {
  posts: Array<Post>;
  subPost: Subscription;

  constructor(
    private _postsService: PostsService,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.getPosts();
    this.loadPost() 
  }

  loadPost() {
    this._postsService.getPosts().subscribe(
      (posts: Array<Post>) => {
        const action = new LoadPosts(posts);
        this.store.dispatch(action);
      }
    );
  }

  getPosts() {
    this.subPost = this.store.pipe(select('posts')).subscribe(
      (posts: any) => {
        this.posts = posts?.filterList;
      }
    );   
  }
}
