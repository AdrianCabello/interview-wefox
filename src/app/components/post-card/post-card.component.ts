import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

//Map
import * as  mapboxgl from 'mapbox-gl';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { DeletePost } from 'src/app/redux/actions/post.actions';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from '../shared/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit, AfterViewInit {
  @ViewChild('map') divMap!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel = 14;


  @Input() post: Post
  @Input() complete: Boolean

  constructor(
    private _postsService: PostsService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private store: Store<AppState>,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.loadMap()
  }

  loadMap() {
    if (this.complete) {

      this.map = new mapboxgl.Map({
        container: this.divMap.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.post?.long, this.post?.lat],
        zoom: this.zoomLevel
      });

      const maker = new mapboxgl.Marker()
        .setLngLat([this.post?.long, this.post?.lat])
        .addTo(this.map)
    }
  }

  edit() {
    this.router.navigate(['/edit', this.post?.id])
  }

  delete() {
    this.dialog.open(ModalConfirmComponent, {
      data: {
        title: this.post.title,
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        this._postsService.deletePost(this.post?.id).subscribe(
          () => {
            const action = new DeletePost(this.post?.id);
            this.store.dispatch(action);
            this._snackBar.open('Post Deleted', 'Done', {
              duration: 3000
            });
            this.router.navigate([''])
          }
        )
      }
    });
  }
}
