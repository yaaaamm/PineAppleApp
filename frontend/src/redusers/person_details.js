import  { GET_PERSON_DETAILS,DELETE_PERSON_DETAIL,UPDATE_PERSON_DETAIL, SAVE_ADD_PERSON_DETAIL } from '../action/person/types.js';


const initialState ={
    person_details: {
        person: '',
        person_previous_last_names: [],
    },
};

export default function (state = initialState, action) {
    let new_person_details = {}
    switch (action.type) {
        case GET_PERSON_DETAILS:
            return {
                ...state,
                person_details: action.payload
            };
        case DELETE_PERSON_DETAIL:
            new_person_details=Object.fromEntries(Object.entries(state.person_details).map(([key, values]) => {
                if (key === action.payload.source) {
                    let newObj=values.filter(function (value) {
                        return (
                            value.id !== action.payload.id)
                    });
                    return ([key, newObj])
                }
                return ([key, values])
            }));
            return {
                ...state,
                person_details: new_person_details

            };
        case UPDATE_PERSON_DETAIL:
            new_person_details=Object.fromEntries(Object.entries(state.person_details).map(([key, values]) => {
                if (key === action.payload.source) {
                    let newArr = values.map(function (value) {
                        if (value.id === action.payload.person_detail.id) {
                            return action.payload.person_detail
                        }
                        return value
                    });
                    return ([key, newArr])
                }
                return ([key, values])
            }));

            return {
                ...state,
                person_details: new_person_details,
            };
        case SAVE_ADD_PERSON_DETAIL:
            new_person_details=Object.fromEntries(Object.entries(state.person_details).map(([key, values]) => {
                if (key === action.payload.source) {
                    let newArr = [
                        ...state.person_details[key], action.payload.person_detail
                    ];
                    return ([key, newArr])
                }
                return ([key, values])
            }));
            return {
                ...state,
                person_details: new_person_details,
            };
        default:
            return state;
    }

}