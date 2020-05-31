import React, {Component} from "react";
import { Button, Modal } from 'semantic-ui-react'
import {connect} from "react-redux";
import {getPersonDetails, personDeleteDetail} from "../../../../action/person/person_detail";
import {personCloseEditDetail, personSaveEditDetail} from "../../../../action/person/person_detail_edit";
import getPersonDetailTableTitle from "./PersonDetailConstTableTitles";

class PersonDetailModal extends Component {
    state={
        person_detail: this.props.person_show_modal.person_detail
    }

    onChange=(e) => this.setState({
        person_detail: Object.fromEntries(Object.entries(this.state.person_detail).map(([key, value]) => {
            if (key === e.target.name) {
                value=e.target.value
            }
            return (
                [key, value])
        }))
    });

    onSave = () => {
        this.props.personSaveEditDetail(this.state.person_detail, this.props.person_show_modal.title_for)
    }


    render() {

        const title=getPersonDetailTableTitle(this.props.person_show_modal.title_for)

        return (
            <React.Fragment>
                <Modal
                    open={ this.props.person_show_modal.display }
                    onClose={ this.props.personCloseEditDetail }
                    size="large"
                >
                    <Modal.Header>Delete Your Account</Modal.Header>
                    <Modal.Content>
                        <div className="modal-body">
                            <form>
                                { Object.entries(this.state.person_detail).map(([key, value]) => {
                                    if (key !== 'id' && key !== 'is_edit_mode') {

                                        return (
                                            <div className="form-group">
                                                <label htmlFor={ key }
                                                       className="col-form-label">{ title[key] }:</label>
                                                <input type="text"
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
                    </Modal.Content>
                     <Modal.Actions>
                        <Button variant="secondary" onClick={ this.props.personCloseEditDetail }>Закрыть</Button>
                        <Button Button variant="primary" onClick={ this.onSave }>Сохранить</Button>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>)
    }
}

const mapStateToProps=state => (
    {
        person_show_modal: state.person_detail_edit.person_show_modal

    });


export default connect(mapStateToProps, {
    personCloseEditDetail,
    personSaveEditDetail
})(PersonDetailModal);