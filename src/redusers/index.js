import { combineReducers } from 'redux';
import persons from './persons'
import person_details from './person_details';
import person_detail_edit from './person_detail_edit';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    persons,
    person_details,
    person_detail_edit,
});
export default createRootReducer

