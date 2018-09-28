import { combineReducers } from 'redux';
import { RECEIVE_BANNER_IMGS } from 'Js/actions';

const banners = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_BANNER_IMGS:
            return [...action.data.banners];
        default:
            return state;
    }
};
const rootReducer = combineReducers({
    banners
});
export default rootReducer