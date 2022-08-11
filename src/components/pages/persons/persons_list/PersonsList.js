import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PersonsService from "../persons_service/PersonsService";

const  personsService  =  new PersonsService();

class PersonsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        };
    }

    componentDidMount() {
    var  self  =  this;
    personsService.getPersons().then(function (result) {
        self.setState({  persons:  result.data})
    });
    }

    render() {
        return (
            <div className="form-group">
                <table className="table table-striped">
                    <thead>
                    <tr >
                        <th scope="col">ID</th>
                        <th scope="col">ФИО</th>
                        <th scope="col">Дата</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.persons.map((person) => (
                            <tr key={person.id}>
                                <td> { person.id } </td>
                                <td><a href ={"person/" + person.id}> { person.first_name } { person.last_name } { person.middle_name }</a></td>
                                <td> { person.createdAt }</td>
                                <td></td>
                            </tr>
                        )) }
                        </tbody>
                </table>
            </div>
    );
}
}


PersonsList.protoType ={
    persons: PropTypes.array.isRequired,
}

export default PersonsList;