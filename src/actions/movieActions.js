import axios from 'axios';
import * as types from './actionTypes';

export function addMovie(movie) {
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.post('http://127.0.0.1:8000/filmes/', movie, {
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: 'disalles7',
                password: 'Disilva@220'
            }

        }).then(response => {
            dispatch({ type: types.ADD_MOVIE, movie })
        }
        ).catch(error => {
            console.error(error);
            dispatch(ajaxLoading(false));
        });
    }
}

export function editMovie(id, movie) {
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.put('http://127.0.0.1:8000/filmes/' + id + '/', movie, {
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: 'disalles7',
                password: 'Disilva@220'
            }

        }).then(response => {
            dispatch({ type: types.EDIT_MOVIE, movie })
        }
        ).catch(error => {
            console.error(error);
            dispatch(ajaxLoading(false));
        });
    }
}

export function deleteMovie(id) {
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.delete('http://127.0.0.1:8000/filmes/' + id + '/', {
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: 'disalles7',
                password: 'Disilva@220'
            }

        }).then(response => {
            dispatch({ type: types.DELETE_MOVIE, id })
        }
        ).catch(error => {
            console.error(error);
            dispatch(ajaxLoading(false));
        });
    }
}

export function setMovie(movies) {
    return { type: types.SET_MOVIES, movies };
}

export function ajaxLoading(status) {
    return { type: types.AJAX_LOADING, status };
}

export function pageMovies(url_page) {
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.get('http://127.0.0.1:8000' + url_page)
            .then(response => {
                dispatch({
                    type: types.PAGE_MOVIES,
                    payload: response.data
                })
            }
            ).catch(error => {
                console.error(error);
                dispatch(ajaxLoading(false));
            });
    }
}


export function getMovies() {
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.get('http://127.0.0.1:8000/filmes')
            .then(response => {
                dispatch(setMovie(response.data));
                dispatch(ajaxLoading(false));
            })
            .catch(error => {
                console.error(error);
                dispatch(ajaxLoading(false));
            });
    };
}
