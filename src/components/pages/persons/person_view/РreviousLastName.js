import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PersonРreviousLastName extends Component{
    constructor(props) {
        super(props);
        this.state={
            person_previous_last_name: '',
        };
    }

    getStyleOnEdit = (editMode) => {
       return {
           marginRight: '2px',
           display: editMode ?
               'none': 'inline-block'
       }
   }
   getStyleOnEditConfirm = (editMode) => {
       return {
           marginRight: '2px',
           display: !editMode ?
               'none': 'inline-block'
       }
   }



    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleCreate=(e) => {
        e.preventDefault();
        this.props.handleCreatePreviousLastName(this.state.person_previous_last_name);
        this.setState({ person_previous_last_name: ''});
    }


    render() {

        return (
            <div className="container self-container-margin-bottom">
                    <h6>Предыдущая фамилия:</h6>
                    <table className="table table-sm table-striped">
                        <thead key="thead">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Предыдущая фамилия</th>
                            <th scope="col" className="text-right">Действие</th>
                        </tr>
                        </thead>
                        <tbody key="tbody">
                        { this.props.person_previous_last_names.map((person_previous_last_name, index) =>
                            <tr key={ person_previous_last_name.id }>
                            <td> { index + 1 } </td>
                            { !person_previous_last_name.is_edit_mode ? (
                                <td>{ person_previous_last_name.last_name } </td>) : (
                                <td><input type="text"
                                           value={ person_previous_last_name.last_name}
                                           name="last_name"
                                           onChange={ (e) => this.props.handleOnChangeEdit(e, person_previous_last_name)}/></td>) }
                            <td className="text-right">
                                <button className="btn btn-outline-info btn-sm "
                                        style={this.getStyleOnEdit(person_previous_last_name.is_edit_mode)}
                                        onClick={ (e) => this.props.handleEditPreviousLastName(person_previous_last_name.id) }>
                                        <i className="fas fa-edit"></i></button>
                                <button className="btn btn-outline-info btn-sm "
                                        style={this.getStyleOnEditConfirm(person_previous_last_name.is_edit_mode)}
                                        onClick={ (e) => this.props.handleConfirmEditPreviousLastName(person_previous_last_name.id) }>
                                        <i className="fas fa-check"></i></button>
                                <button className="btn btn-danger btn-sm"
                                        onClick={ (e) => this.props.handleDeletePreviousLastName(e, person_previous_last_name.id) }>
                                        <i className="far fa-trash-alt"></i></button>
                            </td>
                        </tr>) }
                        </tbody>
                    </table>
                    <p className="text-right">
                        <button className="btn btn-primary btn-sm" type="button" data-toggle="collapse"
                                data-target="#collapsePreviousLastName" aria-expanded="false"
                                aria-controls="collapsePreviousLastName">
                            Добавить +
                        </button>
                    </p>
                    <div className="collapse" id="collapsePreviousLastName">
                        <div className="card card-body">
                            <form className="form-inline" onSubmit={ this.handleCreate }>
                                <div className="form-group mb-2">
                                    <label htmlFor="person_previous_last_name">Добавить фамилию:</label>
                                </div>
                                <div className="form-group mx-sm-3 mb-2">
                                    <input type="text" className="form-control form-control-sm"
                                           name="person_previous_last_name" onChange={ this.onChange }
                                           value={ this.state.person_previous_last_name }/>
                                </div>

                                <button type="submit" className="btn btn-primary mb-2 btn-sm">Добавить</button>
                            </form>
                        </div>
                    </div>
                </div>

        );
    }
}

PersonРreviousLastName.protoType ={
    person_previous_last_names: PropTypes.array.isRequired,
}

export default PersonРreviousLastName;