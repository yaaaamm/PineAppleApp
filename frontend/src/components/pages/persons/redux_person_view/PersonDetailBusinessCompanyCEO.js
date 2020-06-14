import React, {Component} from "react";
import {connect} from "react-redux";
import PersonDetailBusinessIPTableBody from "./PersonDetailBusinessIPTableBody";
import {personOpenAddDetail} from "../../../../action/person/person_detail_edit";
import PersonDetailBusinessCompanyTableBody from "./PersonDetailBusinessCompanyTableBody";
import {main_titles} from "./PersonDetailConstTableTitles";


class PersonDetailBusinessCompanyCEO extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="mx-auto my-2 my-sm-3 my-lg-4 p-3">
                <h6>{main_titles[this.props.keyName]}</h6>
                    <table className="table">
                    <thead>
                    <tr>
                        <th colSpan="1">Название компании</th>
                        <th colSpan="1">ИНН</th>
                        <th colSpan="1">Ген. дир с</th>
                        <th colSpan="1">Ген. дир по</th>
                        <th colSpan="1">Период работы компании с</th>
                        <th colSpan="1">Период работы компании по</th>
                        <th colSpan="4">Учредители</th>
                        <th colSpan="1">Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.props.person_companies_CEO.map(( value, index ) => {
                        return (
                            <PersonDetailBusinessCompanyTableBody key={ index } data={ value } keyName={this.props.keyName}/>)
                    }) }
                    </tbody>
                </table>
                 <div className="text-right">
                    <button className="btn btn btn-primary btn-sm" onClick={() =>this.props.personOpenAddDetail(this.props.keyName)}>Добавить</button>
                </div>
                </div>
            </React.Fragment>);
    }
}

const mapStateToProps=state => (
    {
        person_companies_CEO: state.person_details.person_details.person_companies_CEO,
    });

export default connect(mapStateToProps, {personOpenAddDetail})(PersonDetailBusinessCompanyCEO);