import React, {Component} from "react";
import {connect} from "react-redux";
import PersonDetailBusinessIPTableHeadBody from "./PersonDetailBusinessIPTableHeadBody";


class PersonDetailBusinessIP extends Component {

    render() {
        return (
            <React.Fragment>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th rowSpan="1">Название ИП</th>
                        <th rowSpan="1">ИНН</th>
                        <th rowSpan="1">Действует?</th>
                        <th rowSpan="1">Период работы с</th>
                        <th rowSpan="1">Период работы по</th>
                        <th rowSpan="1">Основной ОКВЕД</th>
                        <th rowSpan="1">Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.props.person_ip.map(( value, index ) => {
                        let row_span=(
                            value[ 'ip_detail' ].length === 0) ? 1 : value[ 'ip_detail' ].length;
                        console.log(value[ 'ip_detail' ].length)
                        return (
                            <PersonDetailBusinessIPTableHeadBody key={ index } data={ value }/>)
                    }) }
                    </tbody>
                </table>
            </React.Fragment>);
    }
}

const mapStateToProps=state => (
    {
        person_ip: state.person_details.person_details.person_ip,
    });

export default connect(mapStateToProps)(PersonDetailBusinessIP);