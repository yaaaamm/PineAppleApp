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
    let person_ip ={};
    let person_companies_CEO = {};
    let person_companies_founder = {};
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
                }else if (action.payload.source ==='person_ip_business_detail') {
                person_ip=Object.values(Object.fromEntries(Object.entries(state.person_details[ "person_ip"]).map(( [ key, values ] ) => {
                   let newObj = Object.fromEntries(Object.entries(values).map(( [ key, nextValues]) => {
                        if (key === "business_detail") {
                            let newArr=nextValues.filter(function ( value ) {
                                return ( value.id !== action.payload.id )
                            });
                            return ([ key, newArr ])
                        }
                        return ([ key, nextValues ])
                    }));
                    return ( [key, newObj] )
                })))

            }
                else if (action.payload.source ==='person_companies_CEO_business_detail') {
                person_companies_CEO=Object.values(Object.fromEntries(Object.entries(state.person_details["person_companies_CEO"]).map(( [ key, values ] ) => {
                   let newObj = Object.fromEntries(Object.entries(values).map(( [ key, nextValues]) => {
                        if (key === "business_detail") {
                            let newArr=nextValues.filter(function ( value ) {
                                return ( value.id !== action.payload.id )
                            });
                            return ([ key, newArr ])
                        }
                        return ([ key, nextValues ])
                    }));
                    return ( [key, newObj] )
                })))

            } else if (action.payload.source ==='person_companies_founder_business_detail') {
                person_companies_founder=Object.values(Object.fromEntries(Object.entries(state.person_details["person_companies_founder"]).map(( [ key, values ] ) => {
                   let newObj = Object.fromEntries(Object.entries(values).map(( [ key, nextValues]) => {
                        if (key === "business_detail") {
                            let newArr=nextValues.filter(function ( value ) {
                                return ( value.id !== action.payload.id )
                            });
                            return ([ key, newArr ])
                        }
                        return ([ key, nextValues ])
                    }));
                    return ( [key, newObj] )
                })))

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
            }else if (Object.keys(person_ip).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_ip});
            }else if (Object.keys(person_companies_CEO).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_companies_CEO});
            }else if (Object.keys(person_companies_founder).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_companies_founder});
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
                person_social_relations_group=Object.fromEntries(Object.entries(state.person_details["person_social_relations_group"]).map(([key, values]) => {
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

            } else if (action.payload.source ==='person_ip_business_detail') {
                person_ip=Object.values(Object.fromEntries(Object.entries(state.person_details[ "person_ip"]).map(( [ key, values ] ) => {
                   let newObj = Object.fromEntries(Object.entries(values).map(( [ key, nextValues]) => {
                        if (key === "business_detail") {
                            let newArr=nextValues.map(function ( value ) {
                                if ( value.id === action.payload.person_detail.id ) {
                                    return action.payload.person_detail
                                }
                                return value
                            });
                            return ([ key, newArr ])
                        }
                        return ([ key, nextValues ])
                    }));
                    return ( [key, newObj] )
                })))

            }else if (action.payload.source ==='person_companies_CEO_business_detail') {
                person_companies_CEO=Object.values(Object.fromEntries(Object.entries(state.person_details["person_companies_CEO"]).map(( [ key, values ] ) => {
                   let newObj = Object.fromEntries(Object.entries(values).map(( [ key, nextValues]) => {
                        if (key === "business_detail") {
                            let newArr=nextValues.map(function ( value ) {
                                if ( value.id === action.payload.person_detail.id ) {
                                    return action.payload.person_detail
                                }
                                return value
                            });
                            return ([ key, newArr ])
                        }
                        return ([ key, nextValues ])
                    }));
                    return ( [key, newObj] )
                })))

            }
            else if (action.payload.source ==='person_companies_founder_business_detail') {
                person_companies_founder=Object.values(Object.fromEntries(Object.entries(state.person_details["person_companies_founder"]).map(( [ key, values ] ) => {
                   let newObj = Object.fromEntries(Object.entries(values).map(( [ key, nextValues]) => {
                        if (key === "business_detail") {
                            let newArr=nextValues.map(function ( value ) {
                                if ( value.id === action.payload.person_detail.id ) {
                                    return action.payload.person_detail
                                }
                                return value
                            });
                            return ([ key, newArr ])
                        }
                        return ([ key, nextValues ])
                    }));
                    return ( [key, newObj] )
                })))

            }

            else {
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
            }else if (Object.keys(person_ip).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_ip});
            }else if (Object.keys(person_companies_CEO).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_companies_CEO});
            }else if (Object.keys(person_companies_founder).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_companies_founder});
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
                } else if (action.payload.source ==='person_ip_business_detail') {
                    person_ip=Object.values(Object.fromEntries(Object.entries(state.person_details[ "person_ip" ]).map(( [ key, values ] ) => {
                        if ( values.id === action.payload.person_detail.ip ) {
                            let newObj=Object.fromEntries(Object.entries(values).map(( [ nextKey, nextValues ] ) => {
                                if ( nextKey === "business_detail" ) {
                                    let newArr=[ ...state.person_details[ "person_ip" ][ key ][ nextKey ], action.payload.person_detail ];
                                    return (
                                        [ nextKey, newArr ])
                                }
                                return (
                                    [ nextKey, nextValues ])
                            }));
                            return (
                                [ key, newObj ])
                        }
                        return (
                            [ key, values ])
                    })));
                } else if (action.payload.source ==='person_companies_CEO_business_detail') {
                    person_companies_CEO=Object.values(Object.fromEntries(Object.entries(state.person_details[ "person_companies_CEO" ]).map(( [ key, values ] ) => {
                        if ( values.id === action.payload.person_detail.ip ) {
                            let newObj=Object.fromEntries(Object.entries(values).map(( [ nextKey, nextValues ] ) => {
                                if ( nextKey === "business_detail" ) {
                                    let newArr=[ ...state.person_details[ "person_companies_CEO" ][ key ][ nextKey ], action.payload.person_detail ];
                                    return (
                                        [ nextKey, newArr ])
                                }
                                return (
                                    [ nextKey, nextValues ])
                            }));
                            return (
                                [ key, newObj ])
                        }
                        return (
                            [ key, values ])
                    })));
                }
                else if (action.payload.source ==='person_companies_founder_business_detail') {
                    person_companies_founder=Object.values(Object.fromEntries(Object.entries(state.person_details[ "person_companies_founder" ]).map(( [ key, values ] ) => {
                        if ( values.id === action.payload.person_detail.ip ) {
                            let newObj=Object.fromEntries(Object.entries(values).map(( [ nextKey, nextValues ] ) => {
                                if ( nextKey === "business_detail" ) {
                                    let newArr=[ ...state.person_details[ "person_companies_founder" ][ key ][ nextKey ], action.payload.person_detail ];
                                    return (
                                        [ nextKey, newArr ])
                                }
                                return (
                                    [ nextKey, nextValues ])
                            }));
                            return (
                                [ key, newObj ])
                        }
                        return (
                            [ key, values ])
                    })));
                }


                   /* let newObj = Object.fromEntries(Object.entries(values).map(( [ nextKey, nextValues]) => {
                        console.log(nextKey)
                        if (nextKey === "business_detail") {
                            let newArr=nextValues.map(function ( value ) {
/!*                                console.log(value.id)
                                console.log(action.payload.person_detail)*!/
                                if ( value.id === action.payload.person_detail.ip ) {
                                    console.log(state.person_details['person_social_relations'][key][nextKey])
                                    return [state.person_details['person_social_relations'][key][nextKey], action.payload.person_detail]
                                }
                                return value
                            });
                            console.log(newArr)
                            return ([ key, newArr ])
                        }
                        return ([ key, nextValues ])
                    }*/
                  /* ));
                    return ( [key, newObj] )
                })))
            }*/

                else if (key === action.payload.source) {

                    let newArr=[...state.person_details[key], action.payload.person_detail];
                    return ( [key, newArr] )
                }
                return ( [key, values] )
            }));
            if (Object.keys(person_social_relations).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_social_relations});
            } else if (Object.keys(person_social_relations_group).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_social_relations_group});
            }else if (Object.keys(person_ip).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_ip});
            }else if (Object.keys(person_companies_CEO).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_companies_CEO});
            }else if (Object.keys(person_companies_founder).length !== 0) {
                new_person_details=Object.assign({}, state.person_details, {person_companies_founder});
            }

            return {
                ...state, person_details: new_person_details,
            };
        default:
            return state;
    }

}