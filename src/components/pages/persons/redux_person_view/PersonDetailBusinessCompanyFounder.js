import React, {Component} from "react";
import {connect} from "react-redux";
import PersonDetailBusinessIPTableBody from "./PersonDetailBusinessIPTableBody";
import {personOpenAddDetail} from "../../../../action/person/person_detail_edit";
import PersonDetailBusinessCompanyTableBody from "./PersonDetailBusinessCompanyTableBody";
import {main_titles} from "./PersonDetailConstTableTitles";
import PersonDetailBusinessCompanyTableBodyFounder from "./PersonDetailBusinessCompanyTableBodyFounder";


class PersonDetailBusinessCompanyFounder extends Component {

    render() {
        return (
            <React.Fragment>
                <div className=" card mx-auto my-2 my-sm-3 my-lg-4 p-3">
                <h6>{main_titles[this.props.keyName]}</h6>
                    <table className="table">
                    <thead class="thead-light">
                    <tr>
                        <th colSpan="1" rowSpan="2">Название компании</th>
                        <th colSpan="1" rowSpan="2">ИНН</th>
                        <th colSpan="1" rowSpan="2">Доля в компании</th>
                        <th colSpan="5" rowSpan="1">Учредители</th>
                        <th colSpan="1" rowSpan="2">Действие</th>
                    </tr>
                    <tr>
                        <th colSpan="1" rowSpan="1">Имя</th>
                        <th colSpan="1" rowSpan="1">Фамилия</th>
                        <th colSpan="1" rowSpan="1">Отчество</th>
                        <th colSpan="1" rowSpan="1">ИНН</th>
                        <th colSpan="1" rowSpan="1">Доля</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.props.person_companies_founder.map(( value, index ) => {
                        return (
                            <PersonDetailBusinessCompanyTableBodyFounder key={ index } data={ value } keyName={this.props.keyName}/>)
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
        person_companies_founder: state.person_details.person_details.person_companies_founder,
    });

export default connect(mapStateToProps, {personOpenAddDetail})(PersonDetailBusinessCompanyFounder);