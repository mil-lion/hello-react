import React from "react";

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div className="warning">
            Предупреждение!
        </div>
    );
}

export default WarningBanner;
