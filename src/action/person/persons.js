import axios from 'axios';
import { GET_PERSONS, ADD_PERSON} from './types';
import { push } from 'connected-react-router'


const API_URL = 'http://localhost:8000';


// Get Persons
export const getPersons = () => dispatch => {
        const url = `${API_URL}/person_list/`;
        return axios.get(url).then(response =>
        {
            dispatch({
                type: GET_PERSONS,
                payload: response.data
            });
        }).catch(err=>console.log(err))
    };

export const addPerson = (data) => dispatch => {
        const url = `${API_URL}/person_add/`;
        return axios.post(url, {
                data: data
            }).then(response =>
        {
            dispatch({
                type: ADD_PERSON,
                payload: response.data
            });
            dispatch(push(`/person/${response.data.id}`))
        }).catch(err=>console.log(err))
    };

export const updatePerson = (data) => dispatch => {
        const url = `${API_URL}/person/${data.id}`;
        return axios.put(url,data).then(response =>
        dispatch(push(`/person/${response.data.id}`))
        ).catch(err=>console.log(err))
    };


export const deletePerson = (id) => dispatch => {
        const url = `${API_URL}/person/${id}`;
        return axios.delete(url).then(response =>
        dispatch(push(`/person_list`))
        ).catch(err=>console.log(err))
    };
