import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostMapComponent } from './components/post-card/post-map/post-map.component';
import { PostEditorComponent } from './components/post-editor/post-editor.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PostContainerComponent } from './components/posts-container/post-container.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { APP_ROUTING } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './components/post/post.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostCardComponent,
    PostMapComponent,
    PostEditorComponent,
    SearchComponent,
    HomeComponent,
    PostContainerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
