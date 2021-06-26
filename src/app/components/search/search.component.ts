import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl;
  posts: Array<Post>

  constructor(private _postsService: PostsService) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('');
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
