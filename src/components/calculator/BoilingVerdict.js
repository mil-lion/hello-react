import React from "react";

// Component BoilingVerdict
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p style={{color: "red"}}>Вода закипит!</p>
    }
    if (props.celsius < 0) {
        return <p style={{color: "blue"}}>Вода замерзнет!</p>
    }
    return <p>Вода не закипит.</p>
}

export default BoilingVerdict;
