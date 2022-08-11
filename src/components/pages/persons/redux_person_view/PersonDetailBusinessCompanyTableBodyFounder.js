import React, {Component} from "react";
import PersonDetailActionButtons from "./PersonDetailActionButtons";


class PersonDetailBusinessCompanyTableBodyFounder extends Component {



    firstTD(data){
        return (
            <>
                <td rowSpan="1">{ data.first_name }</td>
                <td rowSpan="1">{ data.last_name }</td>
                <td rowSpan="1">{ data.middle_name }</td>
                <td rowSpan="1">{ data.inn }</td>
                <td rowSpan="1">{ data.company_share }</td>
            </>
        )
    }




    additionTD(value) {
        return (
            value.map(( value,index ) => {
                if ( index !== 0 ) {
                    return (
                        <tr key ={ index }>
                            <td rowSpan="1">{ value.first_name }</td>
                            <td rowSpan="1">{ value.last_name }</td>
                            <td rowSpan="1">{ value.middle_name }</td>
                            <td rowSpan="1">{ value.inn }</td>
                            <td rowSpan="1">{ value.company_share }</td>
                        </tr>)
                }
            }))
    };


    render(){
        let count_td = 0;
        let row_span = (this.props.data['business_detail'].length === 0) ? 1 : this.props.data['business_detail'].length;
    if (this.props.keyName === 'person_companies_CEO'){
        count_td = 4;
    } else if (this.props.keyName === 'person_companies_founder'){
        count_td = 5;
    }
    return (
        <React.Fragment>
            <tr>
                { Object.entries(this.props.data).map(( [ key, value ] ) => {
                    if ( key !== 'id' && key !== 'person' && key !== 'business_detail' ) {
                        return (
                            <td rowSpan={ row_span } key={ key }>{ value }</td>)
                    }
                }) }
            { (this.props.data['business_detail'].length === 0) ? <><td></td><td></td><td></td><td></td><td></td></> : this.firstTD(this.props.data['business_detail'][0])}
                <PersonDetailActionButtons data={this.props.data} keyName={ this.props.keyName } rowSpan={ row_span } />
            </tr>

            { (this.props.data['business_detail'].length === 0) ? null : this.additionTD(this.props.data['business_detail'])}
                </React.Fragment>);
                }
}

export default PersonDetailBusinessCompanyTableBodyFounder;