import React, {Component} from 'react';
import PropTypes from "prop-types";

class PersonsListItemItem extends Component{

    render() {
        const {id, first_name}=this.props.person;
        return (
            <tbody>
            <tr>
                <td>{ id }</td>
                <td> { first_name } </td>
                <td></td>
            </tr>
            </tbody>

        )
    }
}



PersonsListItemItem.protoType ={
    person: PropTypes.object.isRequired,
}


export default PersonsListItemItem;
