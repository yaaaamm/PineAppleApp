import React from "react";

function PersonDetailViewTableBody(props) {
    return (
        <React.Fragment>
            {Object.entries(props.data).map(([key, value]) => {
                    if (key !== 'id' && key !== 'person') {
                        return (
                            <td key={key}>{ value }</td>)
                    }

            })
            }
        </React.Fragment>);
}

export default PersonDetailViewTableBody;