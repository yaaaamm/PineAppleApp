import React, {Component} from "react";
import {Button}  from "react-bootstrap";
import {connect} from "react-redux";
import classnames from 'classnames'
import {object} from "prop-types";
import {AddPerson} from "../../../../action/person/persons";

class PersonAddUpdate extends Component {
    state={
        first_name: '',
        last_name: '',
        middle_name: '',
        date_birthday: null,
        person_characteristic: '',
        person_comment: '',
        person_negative: '',
        errors: {},
    };

    componentDidMount() {
        const {match: {params}}=this.props;
        if (params && params.id) {
            this.props.getPerson(params.id);
        }
    }

    onChange=(e) => this.setState({
                [e.target.name]: e.target.value
        });

    onUpdate = () => {
        this.props.personUpdateDetail(this.state.person_detail, this.props.person_show_modal.title_for);

    };

    handleClick = (e) => {
        e.preventDefault();
        // validation
        let errors = {};
        if (this.state.first_name ==='') errors.first_name = "Не должно быть пустое";
        if (this.state.last_name ==='') errors.last_name = "Не должно быть пустое";
        this.setState({ errors })
        const isValid = Object.keys(errors).length === 0;
        console.log(isValid)
        if (isValid) {
            const {AddPerson}=this.props;
            AddPerson(this.state);
        }
    };



    render() {
        return (
            <React.Fragment>
                <form action="" onSubmit={this.handleClick}>
                    <div className="form-group">
                        <label htmlFor="first_name" >Имя</label>
                        <input className={classnames("form-control", { "is-invalid": !!this.state.errors.first_name})}
                               type="text"
                               name="first_name"
                               value={this.state.first_name}
                               onChange={this.onChange}
                        />
                        <div className="invalid-feedback">
                            {this.state.errors.first_name}
                        </div>
                       </div>
                    <div className="form-group">
                        <label htmlFor="last_name" >Фамилия</label>
                        <input className={classnames("form-control", { "is-invalid": !!this.state.errors.last_name})}
                               type="text"
                               name="last_name"
                               value={this.state.last_name}
                               onChange={this.onChange}
                        />
                         <div className="invalid-feedback">
                            {this.state.errors.last_name}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="middle_name">Отчество</label>
                        <input className="form-control"
                               type="text"
                               name="middle_name"
                               value={this.state.middle_name}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date_birthday">Отчество</label>
                        <input className="form-control"
                               type="date"
                               name="date_birthday"
                               value={this.state.date_birthday}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="person_characteristic">Характеристика</label>
                        <textarea className="form-control"
                                  name="person_characteristic"
                                  rows="3"
                                  value={this.state.person_characteristic}
                                  onChange={this.onChange}
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="person_comment">Комментарий</label>
                        <textarea className="form-control"
                                  name="person_comment"
                                  rows="3"
                                  value={this.state.person_comment}
                                  onChange={this.onChange}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="person_negative">Негатив</label>
                        <textarea className="form-control"
                                  name="person_negative"
                                  rows="3"
                                  value={this.state.person_negative}
                                  onChange={this.onChange}
                        ></textarea>
                    </div>
                    <div className="text-right">
                        <button className="btn btn-primary">Сохранить</button>
                    </div>
                </form>
            </React.Fragment>)
    }
}


/*function mapStateToProps(state){
    if (state.person_detail_edit.person_show_modal.person_detail.id) {
        return {
            person_show_modal: state.person_detail_edit.person_show_modal
        }
    }
    console.log(state.person_detail_edit.person_show_modal.person_detail)
    let newObj = Object.fromEntries(Object.entries(state.person_detail_edit.person_show_modal.person_detail).map(([key,value]) => {
        value="";
            return ([key, value])
    }))
    console.log(newObj)
    return {
        person_show_modal: {
            person_detail: newObj
        }

    }
}*/


export default connect(null, {AddPerson})(PersonAddUpdate);