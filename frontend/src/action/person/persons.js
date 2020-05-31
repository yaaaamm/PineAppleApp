import history from '../../history'
import axios from 'axios';
import { GET_PERSONS, ADD_PERSON, UPDATE_PERSON } from './types';
import store from "../../store";
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
    }

export const AddPerson = (data) => dispatch => {
        const url = `${API_URL}/person_add/`;
        return axios.post(url, {
                data: data
            }).then(response =>
        {
            dispatch({
                type: ADD_PERSON,
                payload: response.data
            });
            console.log(response.data)
            dispatch(push(`/person/${response.data.id}`))
        }).catch(err=>console.log(err))
    };

