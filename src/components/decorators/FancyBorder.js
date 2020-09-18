import React from "react";
import PropTypes from "prop-types";

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

FancyBorder.propTypes = {
    color: PropTypes.string.isRequired
};

export default FancyBorder;
