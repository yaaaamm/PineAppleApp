import React, {Component} from "react";
import PersonDetailActionButtons from "./PersonDetailActionButtons";


class PersonDetailBusinessIPTableHeadBody extends Component {

    additionOkved(value) {
        return (
            value.map(( value,index ) => {
                if ( index !== 0 ) {
                    return (
                        <tr>
                            <td>{ value.ip_detail_okved }</td>
                        </tr>)
                }
            }))
    };


    render(){
    let row_span = (this.props.data['ip_detail'].length === 0) ? 1 : this.props.data['ip_detail'].length;
    return (
        <React.Fragment>
            <tr>
                { Object.entries(this.props.data).map(( [ key, value ] ) => {
                    if ( key !== 'id' && key !== 'person' && key !== 'ip_detail' ) {
                        return (
                            <td rowSpan={ row_span } key={ key }>{ value }</td>)
                    }
                }) }
            { (this.props.data['ip_detail'].length === 0) ? <td></td> : <td rowSpan="1" key={ "ip_detail" }>{ this.props.data['ip_detail'][0][ "ip_detail_okved" ] }</td>}
                <PersonDetailActionButtons data={this.props.data} />
            </tr>

            { (this.props.data['ip_detail'].length === 0) ? null : this.additionOkved(this.props.data.ip_detail)}
                </React.Fragment>);
                }
}

export default PersonDetailBusinessIPTableHeadBody;