import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getPersonDetails, personDeleteDetail } from '../../../../action/person/person_detail';
import {connect} from "react-redux";
import PersonsService from "../persons_service/PersonsService";
import PersonDetailSingleBlock from "./PersonDetailSingleBlock";
import  { Link } from 'react-router-dom'
import PersonMainData from "./PersonMainData";
import TabsWrappedLabel from "./PersonDetailTabs";
import PersonDetailBusinessIP from "./PersonDetailBusinessIP";
import PersonDetailModal from "./PersonDetailModal";
import PersonDetailBusinessModal from "./PersonDetailBusinessIPModal";
import PersonDetailBusinessCompanyCEO from "./PersonDetailBusinessCompanyCEO";


const  personsService  =  new PersonsService();

class PersonBase extends Component {

    static propTypes={
        person_details: PropTypes.object.isRequired,
        getPersonDetails: PropTypes.func.isRequired,
        personDeleteDetail: PropTypes.func.isRequired,
    };



    componentDidMount() {
        const {match: {params}}=this.props;
        if (params && params.id) {
            this.props.getPersonDetails(params.id);
        }
    }

    //PERSONS FUNCTION
    handleDeletePreviousLastName(e, id) {
        var self=this;
        const source="PersonPreviousLastName"
        personsService.PersonDeletePreviousLastName({id: id, source: source}).then(() => {
            var newArr=self.state.person_previous_last_names.filter(function (obj) {
                return obj.id !== id;
            });
            self.setState({person_previous_last_names: newArr})
        });
    }

    handleCreatePreviousLastName(last_name) {
        var self=this;
        const source="PersonPreviousLastName"
        personsService.createPersonPreviousLastName({
            person_id: self.state.person.id, last_name: last_name, source: source
        }).then((res) => {
            self.setState({person_previous_last_names: [...self.state.person_previous_last_names, res.data]});
        }).catch(() => {
            alert('There was an error! Please re-check your form.');
        });
    }

    handleEditPreviousLastName(id) {
        var self=this;
        self.setState({
            person_previous_last_names: self.state.person_previous_last_names.map(last_name => {
                if (last_name.id === id) {
                    last_name.is_edit_mode= !last_name.is_edit_mode
                }
                return last_name
            })
        })
    }

    handleOnChangeEdit(e, person_previous_last_name) {
        var self=this;
        self.setState({
            person_previous_last_names: self.state.person_previous_last_names.map(last_name => {
                if (last_name.id === person_previous_last_name.id) {
                    last_name.last_name=e.target.value
                }
                return last_name
            })
        })
    }

    handleConfirmEditPreviousLastName(id) {
        var self=this;
        const source="PersonPreviousLastName"
        personsService.updatePersonPreviousLastName({
            data: self.state.person_previous_last_names.filter(item => item.id === id), source: source
        }).then((res) => {
            self.setState({
                person_previous_last_names: self.state.person_previous_last_names.map(last_name => {
                    if (last_name.id === res.data.id) {
                        last_name.is_edit_mode= !last_name.is_edit_mode
                    }
                    return last_name
                })
            })
        }).catch(() => {
            alert('There was an error!');
        })
    }

    showModal=(display) => {
            if (display) {
                return (
                    <PersonDetailModal />)
            } else {
                return (
                    <div></div>)
            }
        };
    showModalBusiness=(display) => {
        if (display) {
                return (
                    <PersonDetailBusinessModal />)
            } else {
                return (
                    <div></div>)
            }
        };


    render() {
        if ( this.props.person_details.person ) {
            return (
                <div className="container">
                    <PersonMainData key={ 'person' } data={ this.props.person_details.person }/>
                    { Object.entries(this.props.person_details).map(( [ key, value ] ) => {
                        if ( key === 'person_social_relations' || key === 'person_social_relations_group' ) {
                            return (

                                    <div key={ key } className="card mx-auto my-2 my-sm-3 my-lg-4 p-3">
                                        <TabsWrappedLabel key={ key } keyName={ key } data={ value }/>
                                    </div>
                                )
                        }else if ( key === 'person_ip')  {
                            return (
                                <PersonDetailBusinessIP key={ key } keyName={ key }/>
                            )
                        }else if ( key === 'person_companies_CEO')  {
                            return (
                                <PersonDetailBusinessCompanyCEO key={ key } keyName={ key }/>
                            )
                        }else if( key !== 'person') {
                            return (
                                <PersonDetailSingleBlock key={ key } keyName={ key } data={ value }/>)
                        }
                    }) }
                    { this.showModal(this.props.person_show_modal.display) }
                    { this.showModalBusiness(this.props.person_show_modal_business.display) }
                </div>);
        }
        return (<div></div>)
    }
}



const mapStateToProps = state => ({
    person_details: state.person_details.person_details,
    person_show_modal: state.person_detail_edit.person_show_modal,
    person_show_modal_business: state.person_detail_edit.person_show_modal_business
});


export default connect(mapStateToProps, { getPersonDetails, personDeleteDetail })(PersonBase);