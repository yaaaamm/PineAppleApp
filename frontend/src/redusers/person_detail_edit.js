import {
    OPEN_EDIT_PERSON_DETAIL,
    CLOSE_EDIT_PERSON_DETAIL,
    OPEN_ADD_PERSON_DETAIL
} from "../action/person/types";
import getPersonDetailTableTitle from "../components/pages/persons/redux_person_view/PersonDetailConstTableTitles";

const initialState = {
    person_show_modal: {
        display: false,
        title_for: "",
        person_detail: {},

    }
}

export default function (state = initialState, action){
    switch (action.type) {
          case OPEN_ADD_PERSON_DETAIL:
              return {
                ...state,
                  person_show_modal: {
                    display: true,
                    title_for: action.payload.source,
                    person_detail: action.payload.person_detail
                }
            };


        case OPEN_EDIT_PERSON_DETAIL:
            return {
                ...state, person_show_modal: {
                    display: true,
                    title_for: action.payload.source,
                    person_detail: action.payload.person_detail
                }
            };
         case CLOSE_EDIT_PERSON_DETAIL:
            return {
                ...state,
                person_show_modal: {
                display: false,
                title_for: "",
                person_detail: {},
                }
            };
        default:
            return state;
    }

}