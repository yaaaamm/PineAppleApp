import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PersonsService from "../persons_service/PersonsService";
import PersonРreviousLastName from "./РreviousLastName";
import PersonAddresses from "./Addresses";

const  personsService  =  new PersonsService();

class PersonBase extends Component{
    constructor(props) {
        super(props);
        this.state = {
            person: [],
            person_previous_last_names: [],
            person_addresses: [],
        };
        this.handleDeletePreviousLastName  =  this.handleDeletePreviousLastName.bind(this);
        this.handleCreatePreviousLastName  =  this.handleCreatePreviousLastName.bind(this);
        this.handleEditPreviousLastName =  this.handleEditPreviousLastName.bind(this);
        this.handleOnChangeEdit = this.handleOnChangeEdit.bind(this);
        this.handleConfirmEditPreviousLastName= this.handleConfirmEditPreviousLastName.bind(this);
    }

    componentDidMount() {
        var self=this;
        const {match: {params}}=this.props;
        if (params && params.id) {
            personsService.getPerson(params.id).then(function (result) {

                self.setState({person: result.person})
                self.setState({
                    person_previous_last_names: result.person_previous_last_names.map(last_name => {
                        last_name.is_edit_mode = true
                        return last_name
                    })})
                 self.setState({
                    person_addresses: result.person_addresses.map(data => {
                        data.is_edit_mode = true
                        return data
                    })})
            })
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
        console.log(this.props)
        const {first_name, last_name, middle_name, date_birthday, person_characteristic}=this.state.person;
        return (
            <div className="container">
                <div className="container">
                    <h2> {first_name} {last_name} {middle_name}</h2>
                    <p>Дата рождения: {date_birthday} </p>
                    <p>Характеристика: {person_characteristic}</p>
                </div>
                    <PersonРreviousLastName key={this.state.person_previous_last_names.id}
                                            person_previous_last_names={this.state.person_previous_last_names}
                                            handleEditPreviousLastName={this.handleEditPreviousLastName}
                                            handleCreatePreviousLastName={this.handleCreatePreviousLastName}
                                            handleDeletePreviousLastName={this.handleDeletePreviousLastName}
                                            handleOnChangeEdit={this.handleOnChangeEdit}
                                            handleConfirmEditPreviousLastName={this.handleConfirmEditPreviousLastName}/>
                    <PersonAddresses key={this.state.person_addresses.id}
                                            addresses={this.state.person_addresses}/>
            </div>
    );
}
}
export default PersonBase;