import React from "react";
import {Link} from "react-router-dom";
import moment from "moment"

function PersonMainData(props) {
    const {id, first_name, last_name, middle_name, date_birthday, person_characteristic, person_comment, person_negative}=props.data;
    if (props.data) {
        return (
            <React.Fragment>
                <div className="container">
                    <h2>{ first_name } { last_name } { middle_name } </h2>
                    <div className="text-right">
                        <Link to={ `/person_update/${ id }` } className="btn btn-outline-info">
                            <i className="fas fa-edit"></i></Link>
                    </div>
                    <p>Дата рождения: { moment(date_birthday).calendar() }  </p>
                    <p>Характеристика: { person_characteristic }</p>
                    <p>Комментарий: { person_comment }</p>
                    <p>Негатив: { person_negative }</p>
                </div>
            </React.Fragment>);
    }
    return null
}

export default PersonMainData;