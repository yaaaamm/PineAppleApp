import React from "react";
import getPersonDetailTableTitle from './PersonDetailConstTableTitles'

function PersonDetailViewTableHeaders(props) {
    const title = getPersonDetailTableTitle(props.data)
    return (
        <React.Fragment>
            <th key='#'>#</th>
            {Object.entries(title).map(([key, value])=> {
                 return(<th key={ value } scope="col">{ value }</th>)
            })}
        </React.Fragment>);
}

export default PersonDetailViewTableHeaders;