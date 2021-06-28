import { Action } from '@ngrx/store';
import { Post } from 'src/app/models/post';

export const LOAD_POST = '[Post] Load Posts';
export const DELETE_POST = '[Post] Delete Post';
export const FILTER_POST = '[Post] Filter Post';

export class LoadPosts implements Action {
    readonly type = LOAD_POST;
    constructor(public posts: Array<Post>) { }
}

export class DeletePost implements Action {
    readonly type = DELETE_POST;
    constructor(public post_id: number) { }
}

export class FilterPost implements Action {
    readonly type = FILTER_POST;
    constructor(public filterText: string) { }
}

export type actions = LoadPosts | DeletePost | FilterPost;
