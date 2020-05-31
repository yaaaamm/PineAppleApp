import axios from 'axios';
import {
    GET_PERSON_DETAILS,
    DELETE_PERSON_DETAIL,
    TOGGLE_PERSON_DETAIL,
    UPDATE_PERSON_DETAIL,
    CLOSE_EDIT_PERSON_DETAIL,
    SAVE_ADD_PERSON_DETAIL
} from './types';
const API_URL = 'http://localhost:8000';


//
export const getPersonDetails = (id) => dispatch => {
        const url = `${API_URL}/person/${id}`;
        return axios.get(url).then(response =>
        {
            dispatch({
                type: GET_PERSON_DETAILS,
                payload: response.data
            });
        }).catch(err=>console.log(err))
    };

export const personDeleteDetail = (id, keyName) => dispatch => {
    const url=`${ API_URL }/person_detail_delete/`;
    const data = {id: id, source: keyName}
    return axios.delete(url, {
            data: data
            }).then(response =>
        {
            dispatch({
                type: DELETE_PERSON_DETAIL,
                payload: data
            });
        }).catch(err=>console.log(err))
    };

/*export const personDeleteDetail = (id, keyName) => dispatch => {
    const url=`${ API_URL }/person_data_delete/`;
    const data = {id: id, source: keyName};
    return  (
            dispatch({
                type: DELETE_PERSON_DETAIL,
                payload: data
            })
    );
    };*/
export const personSaveAddDetail = (personDetail, keyName, id) => dispatch => {
    const data={person_detail: personDetail, source: keyName};
    const url = `${API_URL}/person_detail_create/${id}`;
    return axios.post(url, {
        data: data
    }).then(responce => {
        dispatch({
            type: SAVE_ADD_PERSON_DETAIL,
            payload: {
                person_detail: responce.data,
                source: keyName
            }
        });
    }).then(dispatch({
        type: CLOSE_EDIT_PERSON_DETAIL
            })
    ).catch(err => console.log(err))
};



export const personUpdateDetail = (personDetail, keyName) => dispatch => {
    const data={person_detail: personDetail, source: keyName};
    const url=`${ API_URL }/person_detail_update/`;
    return axios.put(url, {
        data: data
    }).then(responce => {
        dispatch({
            type: UPDATE_PERSON_DETAIL,
            payload: data
        });
    }).then(dispatch({
        type: CLOSE_EDIT_PERSON_DETAIL
            })
    ).catch(err => console.log(err))
};






export const personToggleDetail = (id, keyName) => dispatch => {
    const data = {id: id, source: keyName}
    return  (
            dispatch({
                type: TOGGLE_PERSON_DETAIL,
                payload: data
            })
    );
};
