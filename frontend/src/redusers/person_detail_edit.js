import {
    OPEN_EDIT_PERSON_DETAIL,
    CLOSE_EDIT_PERSON_DETAIL,
    OPEN_ADD_PERSON_DETAIL,
    OPEN_EDIT_PERSON_BUSINESS_DETAIL,
    CLOSE_EDIT_PERSON_BUSINESS_DETAIL,
    OPEN_ADD_PERSON_BUSINESS_DETAIL, UPDATE_BUSINESS_MODAL_AFTER_DELETE_DETAIL
} from "../action/person/types";


const initialState = {
    person_show_modal: {
        display: false,
        title_for: "",
        person_detail: {},
        isNew: false,
        isEdit: false,
        business_id: "",
    },
    person_show_modal_business: {
        display: false,
        title_for: "",
        person_detail: {},
        isNew: false,
        isEdit: false,
    }
};

export default function (state = initialState, action){
    switch (action.type) {
          case OPEN_ADD_PERSON_DETAIL:
              return {
                ...state,
                  person_show_modal: {
                    display: true,
                    title_for: action.payload.source,
                    person_detail: action.payload.person_detail,
                    business_id: action.payload.business_id,
                    isNew: true,
                    isEdit: false,
                },
                  person_show_modal_business: {
                    display: false,
                    title_for: state.person_show_modal_business.title_for,
                    person_detail: state.person_show_modal_business.person_detail,
                    isNew: state.person_show_modal_business.isNew,
                    isEdit: false,

                }
            };


        case OPEN_EDIT_PERSON_DETAIL:
            return {
                ...state, person_show_modal: {
                    display: true,
                    title_for: action.payload.source,
                    person_detail: action.payload.person_detail,
                    isNew: false,
                    isEdit: true,
                },
                person_show_modal_business: {
                    display: false,
                    title_for: state.person_show_modal_business.title_for,
                    person_detail: state.person_show_modal_business.person_detail,
                    isNew: state.person_show_modal_business.isNew,
                    isEdit: state.person_show_modal_business.isEdit,
                }
            };
        case CLOSE_EDIT_PERSON_DETAIL:
            if (state.person_show_modal.isNew && state.person_show_modal_business.title_for !=="" && action.payload) {
                state.person_show_modal_business.person_detail.business_detail.push(action.payload);
            }
            if (state.person_show_modal.isEdit && state.person_show_modal_business.title_for !=="" && action.payload) {
                  state.person_show_modal_business.person_detail=Object.fromEntries(Object.entries(state.person_show_modal_business.person_detail).map(([key, values]) => {
                     if (key === "business_detail") {
                         let newArr=values.map(function ( value ) {
                             if ( value.id === action.payload.person_detail.id ) {
                                 return action.payload.person_detail
                             }
                             return value
                         });
                         return ([ key, newArr ])
                     }
                 return ([key, values])
                 }))
            }
            return {
                ...state,
                person_show_modal: {
                display: false,
                title_for: "",
                person_detail: {},
                isNew: false,
                isEdit: false
                },
                person_show_modal_business: {
                    display: (!state.person_show_modal_business.isNew && state.person_show_modal_business.title_for !=="") ? true : false,
                    title_for: (!state.person_show_modal_business.isNew && state.person_show_modal_business.title_for !=="") ? state.person_show_modal_business.title_for : "" ,
                    person_detail: (!state.person_show_modal_business.isNew && state.person_show_modal_business.title_for !=="") ? state.person_show_modal_business.person_detail : {},
                    isNew: false,
                    isEdit: false
                }
            };
             case OPEN_EDIT_PERSON_BUSINESS_DETAIL:
            return {
                ...state,
                person_show_modal_business: {
                    display: true,
                    title_for: action.payload.source,
                    person_detail: action.payload.person_detail,
                    isNew: false,
                    isEdit: true
                }
            };

            case CLOSE_EDIT_PERSON_BUSINESS_DETAIL:
                return {
                    ...state, person_show_modal_business: {
                        display: false,
                        title_for: "",
                        person_detail: {},
                        isNew: false,
                        isEdit: false
                    }
            };
            case OPEN_ADD_PERSON_BUSINESS_DETAIL:
              return {
                 ...state,
                person_show_modal_business: {
                    display: true,
                    title_for: action.payload.source,
                    person_detail: action.payload.person_detail,
                    isNew: true,
                    isEdit: false
                }
            };
        case UPDATE_BUSINESS_MODAL_AFTER_DELETE_DETAIL:
            let newObj=Object.fromEntries(Object.entries(state.person_show_modal_business.person_detail).map(([key, values]) => {
                     if (key === "business_detail") {
                         let newArr=values.filter(function ( value ) {
                                return ( value.id !== action.payload.id )
                         });
                         return ([ key, newArr ])
                     }
                 return ([key, values])
                 }));
            console.log(newObj)
            return {
                 ...state,
                person_show_modal_business: {
                    display: state.person_show_modal_business.display,
                    title_for: state.person_show_modal_business.title_for,
                    person_detail: newObj,
                    isNew: state.person_show_modal_business.isNew,
                    isEdit: state.person_show_modal_business.isEdit
                }
            };
        default:
            return state;
    }

}