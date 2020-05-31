import { OPEN_EDIT_PERSON_DETAIL, CLOSE_EDIT_PERSON_DETAIL, OPEN_ADD_PERSON_DETAIL } from './types';
import getPersonDetailTableTitle from "../../components/pages/persons/redux_person_view/PersonDetailConstTableTitles";

export const personOpenEditDetail = (personDetail, keyName) => dispatch => {
    const data = {person_detail: personDetail, source: keyName};
    return  (
            dispatch({
                type: OPEN_EDIT_PERSON_DETAIL,
                payload: data
            })
    );
};

export const personOpenAddDetail = (keyName) => dispatch => {
    let person_detail = getPersonDetailTableTitle(keyName);
    let newObj = Object.fromEntries(Object.entries(person_detail).map(([key,value]) => {
        value=null;
            return ([key, value])
    }));
    const data = {person_detail: newObj, source: keyName};
    return  (
            dispatch({
                type: OPEN_ADD_PERSON_DETAIL,
                payload: data
            })
    );
};


export const personCloseEditDetail = () => dispatch => {
    return  (
            dispatch({
                type: CLOSE_EDIT_PERSON_DETAIL
            })
    );
};

