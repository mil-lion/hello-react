import React from "react";
import PropTypes from "prop-types";
import FancyBorder from "./decorators/FancyBorder";

Dialog.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

export default Dialog;