import { FilterStringPipe } from 'src/app/pipes/filter.pipe';
import * as fromPost from '../actions/post.actions';

const initialState = {
    list: [],
    filterList: []
};

export function postReducer(state = initialState, action: fromPost.actions) {
    switch (action.type) {
        case fromPost.LOAD_POST:
            const posts = [...action.posts];
            posts.sort((a, b) => {
                if (a['updated_at'] < b['updated_at']) return 1;
                if (a['updated_at'] > b['updated_at']) return -1;
                return 0;
            });
            return {
                list: posts,
                filterList: posts
            };
        case fromPost.DELETE_POST:
            const postsUpdated = state.list.filter(post => post.id !== action.post_id)
            return {
                ...state,
                list: postsUpdated,
                filterList: postsUpdated
            }
        case fromPost.FILTER_POST:
            const filterList = new FilterStringPipe().transform(state.list, action.filterText);
            return {
                ...state,
                filterList
            }
    }
}
