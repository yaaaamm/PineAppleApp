import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getPersonDetails, personDeleteDetail } from '../../../../action/person/person_detail';
import {connect} from "react-redux";
import PersonsService from "../persons_service/PersonsService";
import PersonDetailSingleBlock from "./PersonDetailSingleBlock";
import  { Link } from 'react-router-dom'


const  personsService  =  new PersonsService();

class PersonBase extends Component{

    static propTypes = {
        person_details: PropTypes.object.isRequired,
        getPersonDetails:  PropTypes.func.isRequired,
        personDeleteDetail: PropTypes.func.isRequired,
};


    componentDidMount() {
        const {match: {params}}=this.props;
        if (params && params.id) {
            this.props.getPersonDetails(params.id);
        }
    }

     //PERSONS FUNCTION
    handleDeletePreviousLastName(e,id){
    var  self  =  this;
    const source = "PersonPreviousLastName"
    personsService.PersonDeletePreviousLastName({id : id, source : source}).then(()=>{
        var  newArr  =  self.state.person_previous_last_names.filter(function(obj) {
            return  obj.id  !==  id;
        });
        self.setState({person_previous_last_names:  newArr})
    });
    }

    handleCreatePreviousLastName(last_name){
        var  self  =  this;
        const source="PersonPreviousLastName"
        personsService.createPersonPreviousLastName({
            person_id: self.state.person.id,
            last_name: last_name,
            source: source
        }).then((res) => {
            self.setState({ person_previous_last_names:[...self.state.person_previous_last_names, res.data]});
        }).catch(() => {
            alert('There was an error! Please re-check your form.');
        });
    }

    handleEditPreviousLastName(id){
       var  self  =  this;
       self.setState ( {
       person_previous_last_names: self.state.person_previous_last_names.map(last_name => {
           if(last_name.id === id ){
               last_name.is_edit_mode = !last_name.is_edit_mode
              }
              return last_name
              })
       })
    }
    handleOnChangeEdit(e,person_previous_last_name){
       var  self  =  this;
       self.setState ( {
       person_previous_last_names: self.state.person_previous_last_names.map(last_name => {
           if(last_name.id === person_previous_last_name.id ){
               last_name.last_name = e.target.value
              }
           return last_name
              })
       })
    }

    handleConfirmEditPreviousLastName(id){
        var  self  =  this;
        const source="PersonPreviousLastName"
        personsService.updatePersonPreviousLastName({
           data: self.state.person_previous_last_names.filter(item => item.id === id),
           source: source
       }).then((res) => {
           self.setState ({
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



    render() {
        const {id, first_name, last_name, middle_name, date_birthday, person_characteristic, person_comment, person_negative}=this.props.person_details.person;
    return (
            <div className="container">
                <div className="container">
                    <h2>{first_name} {last_name} {middle_name} </h2>
                    <div className="text-right">
                       <Link to={`/person_update/${id}`} className="btn btn-outline-info">
                        <i className="fas fa-edit"></i></Link>
                   </div>
                    <p>Дата рождения: {date_birthday}  </p>
                    <p>Характеристика: {person_characteristic}</p>
                    <p>Комментарий: {person_comment}</p>
                    <p>Негатив: { person_negative}</p>
                </div>
                {Object.entries(this.props.person_details).map(([key, value]) => {
                    if (key !== 'person') {
                        return (
                            <PersonDetailSingleBlock key={ key } keyName={ key } data={ value }/>)
                    }
                 return null
                })
                }
            </div>
    );
}
}



const mapStateToProps = state => ({
    person_details: state.person_details.person_details,
});


export default connect(mapStateToProps, { getPersonDetails, personDeleteDetail })(PersonBase);