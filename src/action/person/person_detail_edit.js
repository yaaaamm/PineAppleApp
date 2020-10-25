import {
    OPEN_EDIT_PERSON_DETAIL,
    CLOSE_EDIT_PERSON_DETAIL,
    OPEN_ADD_PERSON_DETAIL,
    OPEN_EDIT_PERSON_BUSINESS_DETAIL,
    CLOSE_EDIT_PERSON_BUSINESS_DETAIL, OPEN_ADD_PERSON_BUSINESS_DETAIL
} from './types';
import getPersonDetailTableTitle from "../../components/pages/persons/redux_person_view/PersonDetailConstTableTitles";

export const personOpenEditDetail = (personDetail, keyName) => dispatch => {
    let type;
    const data = {person_detail: personDetail, source: keyName};
    if (keyName === "person_ip" || keyName ==="person_companies_CEO" || keyName ==="person_companies_founder") {
        type = OPEN_EDIT_PERSON_BUSINESS_DETAIL
    }else{
        type = OPEN_EDIT_PERSON_DETAIL
    }

    return  (
            dispatch({
                type: type,
                payload: data
            })
    );
};

export const personOpenAddDetail = (keyName,business_id=null) => dispatch => {
    let type;
    let person_detail = getPersonDetailTableTitle(keyName);
    let newObj = Object.fromEntries(Object.entries(person_detail).map(([key,value]) => {
        value=null;
            return ([key, value])
    }));
    if (keyName === "person_ip" || keyName ==="person_companies_CEO" || keyName ==="person_companies_founder") {
        type = OPEN_ADD_PERSON_BUSINESS_DETAIL
    }else{
        type = OPEN_ADD_PERSON_DETAIL
    }

    const data = {person_detail: newObj, source: keyName, business_id: business_id };
    return  (
            dispatch({
                type: type,
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

export const personCloseEditBusinessDetail = () => dispatch => {
    return  (
            dispatch({
                type: CLOSE_EDIT_PERSON_BUSINESS_DETAIL
            })
    );
};
