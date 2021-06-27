import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Post } from 'src/app/models/post';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { PostsService } from 'src/app/services/posts.service';

//Map
import * as  mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit, AfterViewInit {
  // Map
  @ViewChild('map') divMap!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel = 14;

  post_id: number;
  newPost: FormGroup;

  form_file: FormGroup;
  file_message = 'No selected File';
  file_name = '';
  form_data = new FormData();
  url_public = '';
  percentage = 0;
  isEdit = false;
  loading = false;

  map_long: number;
  map_lat: number;

  constructor(
    private _firebaseStorage: FirebaseStorageService,
    private _postsService: PostsService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.defineFormGroups()
    this.loadPost()
  }

  ngAfterViewInit() {
    if (!this.isEdit) {
      this.loadMap()
    }
  }

  defineFormGroups() {
    this.newPost = new FormGroup({
      'title': new FormControl('', Validators.required),
      'content': new FormControl('', Validators.required),
      'image_url': new FormControl(null, Validators.required),
      'lat': new FormControl(null, Validators.required),
      'long': new FormControl(null, Validators.required),
    });

    this.form_file = new FormGroup({
      'newFile': new FormControl(null, Validators.required),
    });
  }

  loadPost() {
    this.post_id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    // Check if is New or Edit Page
    if (this.post_id) {
      this.isEdit = true
      this._postsService.getPost(this.post_id).subscribe(
        (post: Post) => {
          this.setPost(post)
          this.loadMap(post)
        }
      )
    } else {
      this.isEdit = false;
    }
  }


  setPost(post) {
    this.newPost.get('title').setValue(post?.title);
    this.newPost.get('content').setValue(post?.content);
    this.newPost.get('image_url').setValue(post?.image_url);
    this.map_lat = post?.lat;
    this.map_long = post?.long;
    this.url_public = post?.image_url;
  }


  loadMap(post?: Post) {
    if (this.isEdit) {
      this.map = new mapboxgl.Map({
        container: this.divMap.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [post?.long, post?.lat],
        zoom: this.zoomLevel
      });

      const maker = new mapboxgl.Marker()
        .setLngLat([post?.long, post?.lat])
        .addTo(this.map)
    } else {
      //Default
      this.map_lat = 40.41678;
      this.map_long = -3.70379;

      this.map = new mapboxgl.Map({
        container: this.divMap.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.map_long, this.map_lat],
        zoom: this.zoomLevel
      });
    }

    var geocoder = new MapboxGeocoder({ // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
    });

    this.map.addControl(geocoder, 'top-left');
    geocoder.on('result', (e) => {
      this.map_long = e.result.geometry.coordinates[0];
      this.map_lat = e.result.geometry.coordinates[1]
    });
  }

  public changeFile(event) {
    this.url_public = null;
    this.loading = true;
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.file_name = event.target.files[i].name;
        this.form_data.delete('newFile');
        this.form_data.append('newFile', event.target.files[i], event.target.files[i].name)
      }
      this.uploadFile()
    } else {
      this.loading = false;
    }
  }

  //Upload File to Cloud Storage
  public uploadFile() {
    let newFile = this.form_data.get('newFile');
    let reference = this._firebaseStorage.referenceCloudStorage(this.file_name);
    let task = this._firebaseStorage.taskCloudStorage(this.file_name, newFile);

    //Cambia el porcentaje
    task.percentageChanges().subscribe((percentage) => {
      this.percentage = Math.round(percentage);
      if (this.percentage == 100) {
        this.loading = false;
        reference.getDownloadURL().subscribe((URL) => {
          this.url_public = URL;
          this.newPost.get('image_url').setValue(URL);
        });
      }
    });
  }

  createPost() {
    this.newPost.get('long').setValue(this.map_long);
    this.newPost.get('lat').setValue(this.map_lat);

    if (this.newPost.valid) {
      if (this.isEdit) {
        this._postsService.updatePost(this.newPost).subscribe(
          (post: Post) => {
            this.router.navigate(['/post', post.id])
            this._snackBar.open('Post Created', 'Done', {
              duration: 3000
            });
          }
        )
      } {
        this._postsService.createPost(this.newPost.value).subscribe(
          (post: Post) => {
            this.router.navigate(['/post', post.id])
            this._snackBar.open('Post Created', 'Done', {
              duration: 3000
            });
          }
        )
      }
    } {
      // Invalid Form
    }
  }
}
