import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPersons } from '../../../../action/person/persons';
import moment from "moment";


export class PersonsList extends Component {
    static propTypes = {
        persons: PropTypes.array.isRequired,
        getPersons: PropTypes.func.isRequired,
    };


    componentDidMount() {
        this.props.getPersons();
    }

    render() {
        console.log(this.props.persons)
        return (
            <div className="form-group">
                <table className="table table-striped">
                    <thead>
                    <tr >
                        <th scope="col">ID</th>
                        <th scope="col">ФИО</th>
                        <th scope="col">Дата добавления</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.props.persons.map((person) => (
                        <tr key={person.id}>
                                <td> { person.id } </td>
                                <td><a href ={"person/" + person.id}> { person.first_name } { person.last_name } { person.middle_name }</a></td>
                                <td> { moment(person.createdAt).format('Do MMMM YYYY, h:mm:ss a') }</td>
                                <td></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
    );
}
}



const mapStateToProps = state => ({
    persons: state.persons.persons,
});


export default connect(mapStateToProps, { getPersons })(PersonsList);