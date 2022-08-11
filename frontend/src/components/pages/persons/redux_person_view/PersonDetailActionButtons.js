import React, {Component} from 'react';
import {getPersonDetails, personDeleteDetail, personDeleteBusinessDetail} from '../../../../action/person/person_detail';
import {personOpenEditDetail} from '../../../../action/person/person_detail_edit'
import {connect} from "react-redux";
import PropTypes from "prop-types";

class PersonDetailActionButtons extends Component {
      static propTypes = {
          person_details: PropTypes.object.isRequired,
          getPersonDetails: PropTypes.func.isRequired,
          personDeleteDetail: PropTypes.func.isRequired,
          personOpenEditDetail: PropTypes.func.isRequired,
};


    getStyleOnEdit=(editMode) => {
        return {
            marginRight: '2px',
            display: editMode ? 'none' : 'inline-block'
        }
    };


    render() {
        return (
            <React.Fragment>
                <td rowSpan={this.props.rowSpan } className="text-right">
                    <button className="btn btn-outline-info btn-sm"
                            style={ this.getStyleOnEdit(this.props.data.is_edit_mode) }
                            onClick={() =>this.props.personOpenEditDetail(this.props.data, this.props.keyName) }
                    >
                        <i className="fas fa-edit"></i></button>
                    <button className="btn btn-danger btn-sm"
                    onClick={() =>this.props.personDeleteDetail(this.props.data.id, this.props.keyName) }
                    >
                        <i className="far fa-trash-alt"></i></button>
                </td>
            </React.Fragment>);
    }
}

const mapStateToProps = state => ({
    person_details: state.person_details.person_details,
});


export default connect(mapStateToProps,{ getPersonDetails, personDeleteDetail, personOpenEditDetail, personDeleteBusinessDetail})(PersonDetailActionButtons);