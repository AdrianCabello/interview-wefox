import * as fromNavigation from '../actions/navigation.actions';
import { INavigation } from 'src/app/models/navigation';

const initialState: INavigation = {
    active: ''
};

export function navigationReducer(state = initialState, action: fromNavigation.actions) {
    switch (action.type) {
        case fromNavigation.SET_ACTIVE:
            return {
                ...state,
                active: action.active
            };

    }
}
