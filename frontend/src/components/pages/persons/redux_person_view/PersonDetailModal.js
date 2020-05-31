import React, {Component} from "react";
import {Modal, Button}  from "react-bootstrap";
import {connect} from "react-redux";
import {personSaveAddDetail, personUpdateDetail} from "../../../../action/person/person_detail";
import {personCloseEditDetail} from "../../../../action/person/person_detail_edit";
import getPersonDetailTableTitle, {main_titles} from "./PersonDetailConstTableTitles";
import {object} from "prop-types";

class PersonDetailModal extends Component {
    state={
        person_detail: this.props.person_show_modal.person_detail,
    };

    onChange=(e) => this.setState({
        person_detail: Object.fromEntries(Object.entries(this.state.person_detail).map(([key, value]) => {
            if (key === e.target.name) {
                value=e.target.value
            }
            return (
                [key, value])
        }))
    });

    onUpdate = () => {
        this.props.personUpdateDetail(this.state.person_detail, this.props.person_show_modal.title_for);

    };

    handleClick = () => {
        let isValid=false
        const {personUpdateDetail, personSaveAddDetail, personCloseEditDetail}=this.props;
        if (this.state.person_detail.id) {
            personUpdateDetail(this.state.person_detail, this.props.person_show_modal.title_for);
        } else {
            let newArr=Object.values(this.state.person_detail).filter(value => {
                return value !== ""
            });
            newArr.length === 0 ? isValid=false : isValid=true;
            if (isValid) {
                personSaveAddDetail(this.state.person_detail, this.props.person_show_modal.title_for, this.props.person.id);
            } else {
                console.log("Не заполнено ни одно поле!");
                personCloseEditDetail()
            }

        }
    };



    render() {
        const title=getPersonDetailTableTitle(this.props.person_show_modal.title_for);
        let type ="text"
        return (
            <React.Fragment>
                <Modal
                    show={ this.props.person_show_modal.display }
                    onHide={ this.props.personCloseEditDetail }
                    size="lg"
                >

                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            { main_titles[this.props.person_show_modal.title_for] }
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-body">
                            <form>
                                { Object.entries(this.state.person_detail).map(([key, value]) => {
                                    if (key !== 'id' && key !== 'person') {
                                        if (key.indexOf("date_")>0)
                                        {type = "date"}else{type = "text" }
                                        return (
                                            <div className="form-group">
                                                <label htmlFor={ key }
                                                       className="col-form-label">{ title[key] }:</label>
                                                <input type={ type }
                                                       className="form-control"
                                                       id={ key }
                                                       name={ key }
                                                       value={ value }
                                                       onChange={ this.onChange }
                                                />
                                            </div>)
                                    }
                                }) }
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={ this.props.personCloseEditDetail }>Закрыть</Button>
                        <Button Button variant="primary" onClick={ this.handleClick }>Сохранить</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>)
    }
}

const mapStateToProps= state => (
    {
        person:  state.person_details.person_details.person,
        person_show_modal: state.person_detail_edit.person_show_modal

    });

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


export default connect(mapStateToProps, {
    personCloseEditDetail,
    personUpdateDetail,
    personSaveAddDetail
})(PersonDetailModal);