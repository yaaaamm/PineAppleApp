import React, {Component} from "react";
import PersonDetailActionButtons from "./PersonDetailActionButtons";


class PersonDetailBusinessCompanyTableBody extends Component {

    firstTD(data){
        return (
            <>
                <td rowSpan="1">{ data.first_name }</td>
                <td rowSpan="1">{ data.last_name }</td>
                <td rowSpan="1">{ data.middle_name }</td>
                <td rowSpan="1">{ data.inn }</td>
            </>
        )
    }




    additionTD(value) {
        console.log(value)
        return (
            value.map(( value,index ) => {
                if ( index !== 0 ) {
                    return (
                        <tr key ={ index }>
                            <td rowSpan="1">{ value.first_name }</td>
                            <td rowSpan="1">{ value.last_name }</td>
                            <td rowSpan="1">{ value.middle_name }</td>
                            <td rowSpan="1">{ value.inn }</td>
                        </tr>)
                }
            }))
    };


    render(){
    let row_span = (this.props.data['business_detail'].length === 0) ? 1 : this.props.data['business_detail'].length;
    console.log(row_span)
    return (
        <React.Fragment>
            <tr>
                { Object.entries(this.props.data).map(( [ key, value ] ) => {
                    if ( key !== 'id' && key !== 'person' && key !== 'business_detail' ) {
                        return (
                            <td rowSpan={ row_span } key={ key }>{ value }</td>)
                    }
                }) }
            { (this.props.data['business_detail'].length === 0) ? <><td></td><td></td><td></td><td></td></> : this.firstTD(this.props.data['business_detail'][0])}
                <PersonDetailActionButtons data={this.props.data} keyName={ this.props.keyName } rowSpan={ row_span } />
            </tr>

            { (this.props.data['business_detail'].length === 0) ? null : this.additionTD(this.props.data.business_detail)}
                </React.Fragment>);
                }
}

export default PersonDetailBusinessCompanyTableBody;