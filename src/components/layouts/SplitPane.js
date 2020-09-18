import React from 'react';
import PropTypes from 'prop-types';

SplitPane.propTypes = {
    left: PropTypes.object.isRequired,
    right: PropTypes.object.isRequired
};

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

export default SplitPane;
