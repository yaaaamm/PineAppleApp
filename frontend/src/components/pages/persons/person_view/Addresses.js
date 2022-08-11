import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PersonsService from "../persons_service/PersonsService";
import StyleService from "../persons_service/Style";
import AddressView from "./PersonInfoTableView";


const  personsService  =  new PersonsService();
const  styleService  =  new StyleService();


function AddressEdit(props) {
    return (
        <React.Fragment>
            <td> { props.index + 1 } </td>
            <td><input type="text"
                       value={ props.data.country }
                       name="country"
                       onChange={ (e) => this.props.handleOnChangeEdit(e, props.data) }/></td>
            <td><input type="text"
                       value={ props.data.region }
                       name="region"
                       onChange={ (e) => this.props.handleOnChangeEdit(e, props.data) }/></td>
            <td><input type="text"
                       value={ props.data.district }
                       name="district"
                       onChange={ (e) => this.props.handleOnChangeEdit(e, props.data) }/></td>
            <td><input type="text"
                       value={ props.data.city }
                       name="city"
                       onChange={ (e) => this.props.handleOnChangeEdit(e, props.data) }/></td>
            <td><input type="text"
                       value={ props.data.street }
                       name="street"
                       onChange={ (e) => this.props.handleOnChangeEdit(e, props.data) }/></td>
            <td><input type="text"
                       value={ props.data.building }
                       name="building"
                       onChange={ (e) => this.props.handleOnChangeEdit(e, props.data) }/></td>
            <td><input type="text"
                       value={ props.data.flat }
                       name="flat"
                       onChange={ (e) => this.props.handleOnChangeEdit(e, props.data) }/></td>
             </React.Fragment>
            )
    }


function ActionButton(props) {
    var self = this
    return (<td className="text-right">
        <button className="btn btn-outline-info btn-sm "
                style={styleService.getStyleOnEdit(props.data.is_edit_mode)}
                onClick={ (e) => this.props.handleEditPreviousLastName(props.data.id) }>
            <i className="fas fa-edit"></i></button>
        <button className="btn btn-outline-info btn-sm "
                style={styleService.getStyleOnEditConfirm(props.data.is_edit_mode)}
                onClick={ (e) => this.props.handleConfirmEditPreviousLastName(props.data.id) }>
            <i className="fas fa-check"></i></button>
        <button className="btn btn-danger btn-sm"
                onClick={ (e) => this.props.handleDeletePreviousLastName(e, props.data.id) }>
            <i className="far fa-trash-alt"></i></button>
    </td>
    )
}

function AddressMode(props) {
    if (!props.data.is_edit_mode) {
        return (
            <React.Fragment>

                    <tr key={ props.data.id }>
                        <AddressView data={ props.data } index={ props.index }/>
                        <ActionButton data={props.data}/>
                    </tr>

            </React.Fragment>
        )

    }
    return <AddressEdit data={ props.data } index={ props.index }/>;
}




class PersonAddresses extends Component{
    constructor(props) {
        super(props);
        this.state={
             };
    }

    render() {
        return (
            <div className="container">
                <h6>Адреса:</h6>
                <div className="table-responsive">
                <table className="table table-sm table-striped">
                        <thead key="thead">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Страна</th>
                            <th scope="col">Регион</th>
                            <th scope="col">Округ</th>
                            <th scope="col">Город</th>
                            <th scope="col">Улица</th>
                            <th scope="col">Дом</th>
                            <th scope="col">Строение</th>
                            <th scope="col">Квартира</th>
                            <th scope="col" className="text-right">Действие</th>
                        </tr>
                        </thead>
                            <tbody key="tbody">
                            {this.props.addresses.map((data, index) =>
                                <AddressMode key={data.id} data={data} index={index}/>
                                )}
                            </tbody>
                    </table>
                <p className="text-right">
                    <button className="btn btn-primary btn-sm" type="button" data-toggle="collapse"
                            data-target="#collapseAddress" aria-expanded="false" aria-controls="collapseAddress">
                        Добавить +
                    </button>
                </p>
                <div className="collapse" id="collapseAddress">
                    <div className="card card-body">
                        <form method="POST">
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="country">Страна</label>
                                    <input type="text" className="form-control" name="country" value="Россия"/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="region">Регион</label>
                                    <input type="text" className="form-control" name="region"/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="city">Город</label>
                                    <input type="text" className="form-control" name="city"/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="region">Огруг</label>
                                    <input type="text" className="form-control" name="district"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-9">
                                    <label htmlFor="street">Улица</label>
                                    <input type="text" className="form-control" name="street"/>
                                </div>
                                <div className="form-group col-md-1">
                                    <label htmlFor="building">Дом</label>
                                    <input type="text" className="form-control" name="building"/>
                                </div>
                                <div className="form-group col-md-1">
                                    <label htmlFor="construction_number">Стр.</label>
                                    <input type="text" className="form-control" name="construction_number"/>
                                </div>
                                <div className="form-group col-md-1">
                                    <label htmlFor="flat">Квартира</label>
                                    <input type="text" className="form-control" name="flat"/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm">Добавить</button>
                        </form>
                    </div>
                </div>
</div>
            </div>
        );
    }
}

PersonAddresses.protoType ={
    person_addresses: PropTypes.array.isRequired,
}

export default PersonAddresses;