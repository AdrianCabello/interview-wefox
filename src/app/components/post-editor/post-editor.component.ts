import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {

  newPost: FormGroup;

  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });

  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;

  public loading = false;

  constructor(
    private firebaseStorage: FirebaseStorageService,
    private _postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.newPost = new FormGroup({
      'title': new FormControl('', Validators.required),
      'content': new FormControl('', Validators.required),
      'image_url': new FormControl(null, Validators.required),
      'lat': new FormControl(null, Validators.required),
      'long': new FormControl(null, Validators.required),
    });
  }

  //Evento que se gatilla cuando el input de tipo archivo cambia
  public changeFile(event) {
    this.URLPublica = null;
    this.loading = true;
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
      }
      this.uploadFile()
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
      this.loading = false;
    }
  }

  //Sube el archivo a Cloud Storage
  public uploadFile() {
    let archivo = this.datosFormulario.get('archivo');
    let referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    let tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);

    //Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje == 100) {
        this.loading = false;
        referencia.getDownloadURL().subscribe((URL) => {
          this.URLPublica = URL;
          this.newPost.get('image_url').setValue(URL);
        });
      }
    });
  }

  createPost() {
    this.newPost.get('lat').setValue('-38.558639');
    this.newPost.get('long').setValue('-58.729903');

    this._postsService.createPost(this.newPost.value).subscribe(
      (post: Post) => {
        this.router.navigate(['/post', post.id])
      }
    )

    console.log(this.newPost.value)
  }
}
