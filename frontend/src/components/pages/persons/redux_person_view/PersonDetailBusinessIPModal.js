import React, {Component} from "react";
import {Modal}  from "react-bootstrap";
import {connect} from "react-redux";
import {personSaveAddDetail, personUpdateDetail} from "../../../../action/person/person_detail";
import {
    personCloseEditBusinessDetail,
    personCloseEditDetail,
    personCloseEditModalDetail
} from "../../../../action/person/person_detail_edit";
import getPersonDetailTableTitle, {main_titles} from "./PersonDetailConstTableTitles";
import PropTypes from "prop-types";
import PersonDetailSingleBlock from "./PersonDetailSingleBlock";

class PersonDetailBusinessModal extends Component {
          static propTypes = {
              person: PropTypes.object.isRequired,
              person_show_modal_business: PropTypes.object.isRequired,
              personSaveAddDetail: PropTypes.func.isRequired,
              personUpdateDetail: PropTypes.func.isRequired,
              personCloseEditDetail: PropTypes.func.isRequired,
};


    state={
        person_detail: this.props.person_show_modal_business.person_detail,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.person_show_modal_business !== this.props.person_show_modal_business) {
            this.setState({
                person_detail: this.props.person_show_modal_business.person_detail,
            });
        }
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

    onUpdate = () => {
        this.props.personUpdateDetail(this.state.person_detail, this.props.person_show_modal.title_for);

    };

    handleClick = () => {
        let isValid=false;
        const {personUpdateDetail, personSaveAddDetail, personCloseEditBusinessDetail}=this.props;
        if (this.state.person_detail.id) {
            personUpdateDetail(this.state.person_detail, this.props.person_show_modal_business.title_for);
        } else {
            let newArr=Object.values(this.state.person_detail).filter(value => {
                return value !== null
            });
            newArr.length === 0 ? isValid=false : isValid=true;
            if (isValid) {
                personSaveAddDetail(this.state.person_detail, this.props.person_show_modal_business.title_for, this.props.person.id);
            } else {
                console.log("???? ?????????????????? ???? ???????? ????????!");
                personCloseEditBusinessDetail()
            }

        }
    };



    render() {
        const title=getPersonDetailTableTitle(this.props.person_show_modal_business.title_for);
        let type ="text";
        return (
            <React.Fragment>
                <Modal
                    show={ this.props.person_show_modal_business.display }
                    onHide={ this.props.personCloseEditBusinessDetail }
                    size="lg"
                >

                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            { main_titles[this.props.person_show_modal_business.title_for] }
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-body">
                                { Object.entries(this.state.person_detail).map(([key, value]) => {
                                    if (key !== 'id' && key !== 'person' && key !== 'business_detail') {
                                        if (key.indexOf("date_")>0)
                                            {type = "date"}else{type = "text" }
                                        return (
                                            <div key = { key } className="form-group">
                                                <label htmlFor={ key }
                                                       className="col-form-label">{ title[key] }:</label>
                                                <input type={ type }
                                                       className="form-control"
                                                       name={ key }
                                                       value={ value }
                                                       onChange={ this.onChange }
                                                />
                                            </div>)
                                    } else if (key === 'business_detail'){
                                        let businessKey = this.props.person_show_modal_business.title_for + "_" + key;
                                        return (
                                             <PersonDetailSingleBlock key={ key } keyName={ businessKey } data={ value } business_id={this.state.person_detail.id}/>
                                             )
                                    }
                                    return null
                                }) }

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger" onClick={ this.props.personCloseEditBusinessDetail }>??????????????</button>
                        <button className="btn btn-primary" onClick={ this.handleClick }>??????????????????</button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>)
    }
}

const mapStateToProps= state => (
    {
        person:  state.person_details.person_details.person,
        person_show_modal_business: state.person_detail_edit.person_show_modal_business

    });



export default connect(mapStateToProps, {
    personCloseEditBusinessDetail,
    personUpdateDetail,
    personSaveAddDetail
})(PersonDetailBusinessModal);