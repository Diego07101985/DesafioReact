import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function moviesReducer(state = initialState.movies, action) {
    switch (action.type) {
        case types.SET_MOVIES:
            return action.movies;
        case types.ADD_MOVIE:
            return [
                ...state,
                Object.assign({}, action.movie)
            ];
        case types.EDIT_MOVIE:
            return [
                ...state.filter(movie => movie.results.id !== action.ADD_MOVIE.id),
                Object.assign({}, action.movie)
            ];
        case types.DELETE_MOVIE:
            return [
                ...state.results.filter(movie => movie.id !== action.id)
            ];
        case types.PAGE_MOVIES:
            return action.payload;
        default:
            return state;
    }
}
