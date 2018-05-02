import axios from 'axios';
import * as types from './actionTypes';

export function addMerchant(merchant) {
    return { type: types.ADD_MERCHANT, merchant };
}

export function editMerchant(merchant) {
    return { type: types.EDIT_MERCHANT, merchant };
}

export function deleteMerchant(id) {
    return { type: types.DELETE_MERCHANT, id };
}

export function setMerchants(merchants) {
    return { type: types.SET_MERCHANTS, merchants };
}

export function ajaxLoading(status) {
    return { type: types.AJAX_LOADING, status };
}

export function pageMerchants(url_page) {
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.get('http://127.0.0.1:8000' + url_page)
            .then(response => {
                dispatch({
                    type: types.PAGE_MERCHANTS,
                    payload: response.data
                })
            }
            ).catch(error => {
                console.error(error);
                dispatch(ajaxLoading(false));
            });
    }
}


export function getMerchants() {
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.get('http://127.0.0.1:8000/filmes')
            .then(response => {
                dispatch(setMerchants(response.data));
                dispatch(ajaxLoading(false));
            })
            .catch(error => {
                console.error(error);
                dispatch(ajaxLoading(false));
            });
    };
}
