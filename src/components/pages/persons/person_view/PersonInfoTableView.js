import React from "react";
import PersonBase from "./PersonBase";

function AddressView(props) {
    console.log(props.data)

    return (
        <React.Fragment>
            <td> 1</td>
            { Object.entries(props.data).map(([key, value]) => {
                if (key !== 'id' && key !== 'is_edit_mode') {
                    console.log(key, value)
                    return (
                        <td>{ value }</td>)
                }
            }) }
        </React.Fragment>);
}

export default AddressView;