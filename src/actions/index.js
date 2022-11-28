import api from './api';

export function getItems() {
    return dispatch => {
        dispatch({
            type: 'FETCH_LIST',
            payload: api.get('/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
        });
    }
}