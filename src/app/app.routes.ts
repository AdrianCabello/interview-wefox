import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PostEditorComponent } from "./components/post-editor/post-editor.component";
import { PostComponent } from "./components/post/post.component";
import { PostContainerComponent } from "./components/posts-container/post-container.component";

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: '',
            component: HomeComponent
        },
        {
            path: 'new',
            component: PostEditorComponent,
        },
        {
            path: 'edit/:id',
            component: PostEditorComponent,
            data: { edit: true }
        },
        {
            path: 'post/:id',
            component: PostComponent,
        }
    ], {
        useHash: false,
        preloadingStrategy: PreloadAllModules,
        initialNavigation: 'enabled'
    })],
    exports: [RouterModule],
    providers: []
})

export class APP_ROUTING { }
