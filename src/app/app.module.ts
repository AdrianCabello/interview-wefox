import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ClickOutsideModule } from 'ng-click-outside';

import { HeaderComponent } from './header/header.component';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { PostEditorComponent } from './components/post-editor/post-editor.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { PostContainerComponent } from './components/posts-container/post-container.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostComponent } from './components/post/post.component';
import { environment } from 'src/environments/environment';

import { ModalConfirmComponent } from './components/shared/modal-confirm/modal-confirm.component';
import { postReducer } from './redux/reducers/post.reducer';
import { navigationReducer } from './redux/reducers/navigation.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostCardComponent,
    PostEditorComponent,
    SearchComponent,
    HomeComponent,
    PostContainerComponent,
    HeaderComponent,
    ModalConfirmComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    ClickOutsideModule,
    StoreModule.forRoot({
     posts: postReducer,
     nav: navigationReducer
    }),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  entryComponents: [ModalConfirmComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
