import  { GET_PERSON_DETAILS,DELETE_PERSON_DETAIL,UPDATE_PERSON_DETAIL, SAVE_ADD_PERSON_DETAIL } from '../action/person/types.js';


const initialState ={
    person_details: {
        person: '', person_previous_last_names: [], person_ip: [],
    }
};

export default function (state = initialState, action) {
    let new_person_details = {};
    let person_social_relations={};
    let person_social_relations_group={};
    switch (action.type) {
        case GET_PERSON_DETAILS:
            return {
                ...state,
                person_details: action.payload
            };


        case DELETE_PERSON_DETAIL:
            new_person_details=Object.fromEntries(Object.entries(state.person_details).map(([key, values]) => {
                if (action.payload.source.indexOf('person_social_relations') !== -1 && (action.payload.source.indexOf('person_social_relations_group') !==0)) {
                    person_social_relations=Object.fromEntries(Object.entries(state.person_details["person_social_relations"]).map(([key, values]) => {
                        if (key === action.payload.source) {
                            let newObj=values.filter(function (value) {
                                return ( value.id !== action.payload.id )
                            });
                            return ( [key, newObj] )
                        }
                        return ( [key, values] )
                    }))
                } else if (action.payload.source.indexOf('person_social_relations_group') !== -1) {
                    person_social_relations_group=Object.fromEntries(Object.entries(state.person_details["person_social_relations_group"]).map(([key, values]) => {
                        if (key === action.payload.source) {
                            let newObj=values.filter(function (value) {
                                return ( value.id !== action.payload.id )
                            });
                            return ( [key, newObj] )
                        }
                        return ( [key, values] )
                    }))
                }
                else if (key === action.payload.source) {
                    let newObj=values.filter(function (value) {
                        return ( value.id !== action.payload.id )
                    });
                    return ( [key, newObj] )
                }
                return ( [key, values] )
            }));
            if (Object.keys(person_social_relations).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_social_relations});
            } else if (Object.keys(person_social_relations_group).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_social_relations_group});
            }
            return {
                ...state, person_details: new_person_details
            };


        case UPDATE_PERSON_DETAIL:
            if (action.payload.source.indexOf('person_social_relations') !== -1 && (action.payload.source.indexOf('person_social_relations_group') !==0)){
                person_social_relations=Object.fromEntries(Object.entries(state.person_details["person_social_relations"]).map(([key, values]) => {
                    if (key === action.payload.source) {
                    let newArr = values.map(function (value) {
                        if (value.id === action.payload.person_detail.id) {
                            return action.payload.person_detail
                        }
                        return value
                    });
                    return ( [key, newArr] )
                }
                 return ( [key, values] )
                }));
            } else if (action.payload.source.indexOf('person_social_relations_group') !== -1){
                person_social_relations_group=Object.fromEntries(Object.entries(state.person_details["person_social_relations"]).map(([key, values]) => {
                    if (key === action.payload.source) {
                    let newArr = values.map(function (value) {
                        if (value.id === action.payload.person_detail.id) {
                            return action.payload.person_detail
                        }
                        return value
                    });
                    return ( [key, newArr] )
                }
                 return ( [key, values] )
                }));
            } else {
                new_person_details=Object.fromEntries(Object.entries(state.person_details).map(([key, values]) => {
                    if (key === action.payload.source) {
                        let newArr=values.map(function (value) {
                            if (value.id === action.payload.person_detail.id) {
                                return action.payload.person_detail
                            }
                            return value
                        });
                        return ( [key, newArr] )
                    }
                    return ( [key, values] )
                }));
            }
             if (Object.keys(person_social_relations).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_social_relations});
            } else if (Object.keys(person_social_relations_group).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_social_relations_group});
            }
            return {
                ...state,
                person_details: new_person_details,
            };


        case SAVE_ADD_PERSON_DETAIL:
            new_person_details=Object.fromEntries(Object.entries(state.person_details).map(([key, values]) => {
                if (action.payload.source.indexOf('person_social_relations') !== -1 && (action.payload.source.indexOf('person_social_relations_group') !==0)) {
                    person_social_relations=Object.fromEntries(Object.entries(state.person_details["person_social_relations"]).map(([key, values]) => {
                        if (key === action.payload.source) {
                            let newArr=[...state.person_details['person_social_relations'][key], action.payload.person_detail];
                            return ( [key, newArr] )
                        }
                        return (  [key, values] )
                    }));
                } else if (action.payload.source.indexOf('person_social_relations_group') !== -1) {
                    person_social_relations_group=Object.fromEntries(Object.entries(state.person_details["person_social_relations_group"]).map(([key, values]) => {
                        if (key === action.payload.source) {
                            let newArr=[...state.person_details['person_social_relations_group'][key], action.payload.person_detail];
                            return ( [key, newArr] )
                        }
                        return ( [key, values] )
                    }));
                } else if (key === action.payload.source) {
                    let newArr=[...state.person_details[key], action.payload.person_detail];
                    return ( [key, newArr] )
                }
                return ( [key, values] )
            }));
            if (Object.keys(person_social_relations).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_social_relations});
            } else if (Object.keys(person_social_relations_group).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_social_relations_group});
            }
            return {
                ...state, person_details: new_person_details,
            };
        default:
            return state;
    }

}