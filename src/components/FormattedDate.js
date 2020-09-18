import React from "react";

// *********** Stateless Component ****************
function FormattedDate(props) {
    return (
        <h2>Сейчас {props.time.toLocaleTimeString()}.</h2>
    );
}

export default FormattedDate;
