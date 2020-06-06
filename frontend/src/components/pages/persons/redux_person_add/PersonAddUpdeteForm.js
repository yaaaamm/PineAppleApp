import React, {Component} from "react";
import {connect} from "react-redux";
import classnames from 'classnames'
import PropTypes from "prop-types";
import {addPerson, deletePerson, updatePerson} from "../../../../action/person/persons";
import {getPersonDetails} from "../../../../action/person/person_detail";
import {Modal}  from "react-bootstrap";


class PersonAddUpdate extends Component {
    static propTypes ={
        person: PropTypes.any.isRequired,
        getPersonDetails: PropTypes.func.isRequired,
        addPerson: PropTypes.func.isRequired,
        updatePerson: PropTypes.func.isRequired,
        deletePerson: PropTypes.func.isRequired,
    };

    state={
        id: this.props.person ? this.props.person.id : null,
        first_name: this.props.person ? this.props.person.first_name : '',
        last_name: this.props.person ? this.props.person.last_name : '',
        middle_name: this.props.person ? this.props.person.middle_name : '',
        date_birthday: this.props.person ? this.props.person.date_birthday : null,
        person_characteristic: this.props.person ? this.props.person.person_characteristic : '',
        person_comment: this.props.person ? this.props.person.person_comment : '',
        person_negative: this.props.person ? this.props.person.person_negative : '',
        errors: {},
        open: false,
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.person && (this.props.person.id !== prevProps.person.id)) {
            this.setState({
                id: this.props.person.id,
                first_name: this.props.person.first_name,
                last_name: this.props.person.last_name,
                middle_name: this.props.person.middle_name,
                date_birthday: this.props.person.date_birthday,
                person_characteristic: this.props.person.person_characteristic,
                person_comment: this.props.person.person_comment,
                person_negative: this.props.person.person_negative,
            });
        }
    }


    componentDidMount() {
        const {match: {params}}=this.props;
        if (params && params.id) {
            this.props.getPersonDetails(params.id);
        }
    }

    onChange=(e) => this.setState({
                [e.target.name]: e.target.value
        });


    handleClick = (e) => {
        e.preventDefault();
        // validation
        let errors = {};
        if (this.state.first_name ==='') errors.first_name = "Не должно быть пустое";
        if (this.state.last_name ==='') errors.last_name = "Не должно быть пустое";
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0;
        console.log(isValid);
        if (isValid) {
            const {addPerson, updatePerson}=this.props;
            if (this.state.id){
                updatePerson(this.state);
            }else {
                addPerson(this.state);
            }
        }
    };

    deleteConfirm = (e) => {
        e.preventDefault();
        this.setState({ open: true });
    };
    handleConfirmedDelete = () => {
        this.props.deletePerson(this.state.id);
    };
    handleCancel = () => this.setState({  open: false });

    render() {
        return (
            <React.Fragment>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="first_name">Имя</label>
                        <input className={ classnames("form-control", {"is-invalid": !!this.state.errors.first_name}) }
                               type="text"
                               name="first_name"
                               value={ this.state.first_name }
                               onChange={ this.onChange }
                        />
                        <div className="invalid-feedback">
                            { this.state.errors.first_name }
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name">Фамилия</label>
                        <input className={ classnames("form-control", {"is-invalid": !!this.state.errors.last_name}) }
                               type="text"
                               name="last_name"
                               value={ this.state.last_name }
                               onChange={ this.onChange }
                        />
                        <div className="invalid-feedback">
                            { this.state.errors.last_name }
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="middle_name">Отчество</label>
                        <input className="form-control"
                               type="text"
                               name="middle_name"
                               value={ this.state.middle_name }
                               onChange={ this.onChange }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date_birthday">Отчество</label>
                        <input className="form-control"
                               type="date"
                               name="date_birthday"
                               value={ this.state.date_birthday || "" }
                               onChange={ this.onChange }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="person_characteristic">Характеристика</label>
                        <textarea className="form-control"
                                  name="person_characteristic"
                                  rows="3"
                                  value={ this.state.person_characteristic || "" }
                                  onChange={ this.onChange }
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="person_comment">Комментарий</label>
                        <textarea className="form-control"
                                    name="person_comment"
                                    rows="3"
                                    value={ this.state.person_comment || "" }
                                    onChange={ this.onChange }
                                    />
                    </div>
                    <div className="form-group">
                        <label htmlFor="person_negative">Негатив</label>
                        <textarea className="form-control"
                                  name="person_negative"
                                  rows="3"
                                  value={ this.state.person_negative || "" }
                                  onChange={ this.onChange }
                        />
                    </div>
                    <div className="text-right">
                        <button className="btn btn btn-danger float-left" onClick ={ this.deleteConfirm }>Удалить</button>
                        <button className="btn btn-primary"  onClick={ this.handleClick }>Сохранить</button>
                    </div>

                </form>
                <Modal
                    show={ this.state.open }
                    onHide={ this.handleCancel }
                    size="lg"
                >
                    <Modal.Body>
                        <div className="modal-body">
                            Вы уверены, что хотите удалить все данные по этому объекту?
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={ this.handleCancel }>Закрыть</button>
                        <button className="btn btn-danger" onClick={ this.handleConfirmedDelete }>Удалить</button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>)
    }
}


function mapStateToProps (state, props) {
    const {match: {params}}=props;
    if (params && params.id) {
        return {
            person: state.person_details.person_details.person,
            }
        }
    return {person: {}}
};



export default connect(mapStateToProps, { getPersonDetails,addPerson, updatePerson, deletePerson})(PersonAddUpdate);