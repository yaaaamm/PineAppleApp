import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getPersonDetails, personDeleteDetail } from '../../../../action/person/person_detail';
import {connect} from "react-redux";
import PersonsService from "../persons_service/PersonsService";
import PersonDetailViewTableBody from "./PersonDetailViewTableBody";
import PersonDetailSingleBlock from "./PersonDetailSingleBlock";


class CompanyBase extends Component{


    componentDidMount() {
        const {match: {params}}=this.props;
        if (params && params.id) {
            this.props.getPersonDetails(params.id);
        }
    }



    render() {
        const {first_name, last_name, middle_name, date_birthday, person_characteristic}=this.props.person_details.person;
    return (
            <div className="container">
                <div className="container">
                    <h2>{first_name} {last_name} {middle_name} </h2>
                    <p>Дата рождения: {date_birthday}  </p>
                    <p>Характеристика: {person_characteristic}</p>
                </div>
                {Object.entries(this.props.person_details).map(([key, value]) => {
                    if (key !== 'person') {
                        return (
                            <PersonDetailSingleBlock key={ key } keyName={ key } data={ value }/>)
                    }
                })
                }
            </div>
    );
}
}

PersonBase.protoType = {
    person_details: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    person_details: state.person_details.person_details,
});


export default connect(mapStateToProps, { getPersonDetails, personDeleteDetail })(PersonBase);