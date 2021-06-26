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

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    PostMapComponent,
    PostEditorComponent,
    SearchComponent,
    HomeComponent,
    PostContainerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
