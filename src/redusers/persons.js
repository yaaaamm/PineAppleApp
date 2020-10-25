import  { GET_PERSONS } from '../action/person/types.js';

const initialState = {
    persons: []
}

export default function (state = initialState, action) {
    switch(action.type){
        case GET_PERSONS:
            return {
                ...state,
                persons: action.payload.data
            }
        default:
            return state;
    }

}