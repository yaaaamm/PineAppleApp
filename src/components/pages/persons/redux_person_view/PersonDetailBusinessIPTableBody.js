import React, {Component} from "react";
import PersonDetailActionButtons from "./PersonDetailActionButtons";


class PersonDetailBusinessIPTableBody extends Component {

    additionOkved(value) {
        return (
            value.map(( value,index ) => {
                if ( index !== 0 ) {
                    return (
                        <tr key ={ index }>
                            <td>{ value.ip_detail_okved }</td>
                        </tr>)
                }
            }))
    };


    render(){
    let row_span = (this.props.data['business_detail'].length === 0) ? 1 : this.props.data['business_detail'].length;
    return (
        <React.Fragment>
            <tr>
                { Object.entries(this.props.data).map(( [ key, value ] ) => {
                    if ( key !== 'id' && key !== 'person' && key !== 'business_detail' ) {
                        return (
                            <td rowSpan={ row_span } key={ key }>{ value }</td>)
                    }
                }) }
            { (this.props.data['business_detail'].length === 0) ? <td></td> : <td rowSpan="1" key={ "business_detail" }>{ this.props.data['business_detail'][0][ "ip_detail_okved" ] }</td>}
                <PersonDetailActionButtons data={this.props.data} keyName={ this.props.keyName } rowSpan={ row_span } />
            </tr>

            { (this.props.data['business_detail'].length === 0) ? null : this.additionOkved(this.props.data.business_detail)}
                </React.Fragment>);
                }
}

export default PersonDetailBusinessIPTableBody;