import React, {Component} from "react";
import PersonBase from "./PersonBase";
import {connect} from "react-redux";
import {getPersonDetails} from "../../../../action/person/person_detail";

class PersonDetailView extends Component {


    render() {
        console.log(props.data)
        return (
            <React.Fragment>
                <div>
                <td> 1 </td>
                </div>
            </React.Fragment>);
    }
}
const mapStateToProps = state => ({
    person_details: state.person_details.person_details,
});

export default connect(mapStateToProps, { getPersonDetails })(PersonDetailView);