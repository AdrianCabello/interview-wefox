import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { Post } from 'src/app/models/post';
import { FilterPost, LoadPosts } from 'src/app/redux/actions/post.actions';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() activeList: boolean;

  listSearch: boolean;
  searchControl: FormControl;

  posts: Array<Post>

  subNavigation: Subscription;
  subPost: Subscription;

  constructor(
    private store: Store<AppState>,
    private _postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('');
    this.loadPosts()
    this.activeFilter()
  }

  ngOnDestroy() {
    this.subPost.unsubscribe()
  }

  loadPosts() {
    this.subPost = this.store.pipe(select('posts')).subscribe(
      (posts: any) => {
        this.posts = posts?.filterList;
      }
    );
  }

  getPosts() {
    this._postsService.getPosts().subscribe(
      (posts: Array<Post>) => {
        const action = new LoadPosts(posts);
        this.store.dispatch(action);
      }
    );
  }

  navigatePost(post_id: number) {
    this.listSearch = false;
    this.router.navigate(['post', post_id])
  }

  search() {
    if (this.activeList) {
      this.listSearch = true;
      this.getPosts();
    }
  }

  close() {
    this.listSearch = false;
  }

  activeFilter() {
    this.searchControl.valueChanges.subscribe(filterText => {
      const filterPost = new FilterPost(filterText);
      this.store.dispatch(filterPost)
    });
  }
}
