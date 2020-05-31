import React from "react";

function PersonDetailEditTableBody(props) {
    return (
        <React.Fragment>

            {Object.entries(props.data).map(([key, value]) => {
                    if (key !== 'id' && key !== 'is_edit_mode') {
                        return (
                            <td key={key}> <input className="form-control" type="text"
                                        value={ value }
                                        name={ key }/>
                            </td>
                        )
                    }

            })
            }
        </React.Fragment>);
}

export default PersonDetailEditTableBody;