import React, {Component} from "react";
import PersonDetailViewTableHeaders from './PersonDetailViewTableHeaders';
import PersonDetailViewTableBody from "./PersonDetailViewTableBody";
import PersonDetailActionButtons from "./PersonDetailActionButtons";
import PersonDetailModal from "./PersonDetailModal"
import {connect} from "react-redux";
import {getPersonDetails, personDeleteDetail} from "../../../../action/person/person_detail";
import {personCloseEditDetail, personOpenAddDetail, personOpenEditDetail} from '../../../../action/person/person_detail_edit'
import  {main_titles} from "./PersonDetailConstTableTitles";
import PropTypes from "prop-types";



class PersonDetailSingleBlock extends Component {

    static propTypes = {
        person: PropTypes.any,
        getPersonDetails: PropTypes.func.isRequired,
        personDeleteDetail: PropTypes.func.isRequired,
        personCloseEditDetail: PropTypes.func.isRequired,
        personOpenAddDetail: PropTypes.func.isRequired,
        personOpenEditDetail: PropTypes.func.isRequired,
};


    render() {
        return (
            <div className="container">
                <h6>{main_titles[this.props.keyName]}</h6>
                <div className="table-responsive">
                    <table className="table table-sm table-striped">
                        <thead key="thead">
                        <tr>
                            <PersonDetailViewTableHeaders key={ this.props.keyName } data={ this.props.keyName }/>
                            <th scope="col" className="text-right">Действие</th>
                        </tr>
                        </thead>
                        <tbody key="tbody">
                        { this.props.data.map((item, index) => <tr key={ item.id }>
                            <th scope="row"> { index + 1 }</th>
                            <PersonDetailViewTableBody key={ item.id } data={ item }/>
                            <PersonDetailActionButtons data={ item } keyName={ this.props.keyName } rowSpan="1"/>
                        </tr>) }
                        </tbody>
                    </table>
                </div>
                <div className="text-right">
                    <button className="btn btn btn-primary btn-sm" onClick={() =>this.props.personOpenAddDetail(this.props.keyName, this.props.business_id)}>Добавить</button>
                </div>
            </div>);
    }
}

const mapStateToProps = state => ({
    person_details: state.person_details.person_details


});


export default connect(mapStateToProps, { getPersonDetails, personDeleteDetail, personCloseEditDetail,personOpenEditDetail,personOpenAddDetail })(PersonDetailSingleBlock);