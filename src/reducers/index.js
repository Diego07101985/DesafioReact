import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Reducers
import movies from './merchantsReducer';
import ajaxLoading from './ajaxLoadingReducer';

const rootReducer = combineReducers({
    movies,
    ajaxLoading,
    form: formReducer
});

export default rootReducer;
