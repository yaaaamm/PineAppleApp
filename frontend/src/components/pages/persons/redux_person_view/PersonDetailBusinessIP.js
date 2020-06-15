import React, {Component} from "react";
import {connect} from "react-redux";
import PersonDetailBusinessIPTableBody from "./PersonDetailBusinessIPTableBody";
import {personOpenAddDetail} from "../../../../action/person/person_detail_edit";
import {main_titles} from "./PersonDetailConstTableTitles";


class PersonDetailBusinessIP extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="mx-auto my-2 my-sm-3 my-lg-4 p-3">
                <h6>{main_titles[this.props.keyName]}</h6>
                    <table className="table">
                    <thead>
                    <tr>
                        <th rowSpan="1">Название ИП</th>
                        <th rowSpan="1">ИНН</th>
                        <th rowSpan="1">Период работы с</th>
                        <th rowSpan="1">Период работы по</th>
                        <th rowSpan="1">Основной ОКВЕД</th>
                        <th rowSpan="1">Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.props.person_ip.map(( value, index ) => {
                        return (
                            <PersonDetailBusinessIPTableBody key={ index } data={ value } keyName={this.props.keyName}/>)
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
        person_ip: state.person_details.person_details.person_ip,
    });

export default connect(mapStateToProps, {personOpenAddDetail})(PersonDetailBusinessIP);