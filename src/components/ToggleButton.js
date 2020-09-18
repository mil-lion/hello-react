import React, {Component} from 'react';
import WarningBanner from "./WarningBanner";

class ToggleButton extends Component {
    constructor(props) {
        super(props);
        // Initial State
        this.state = {
            isToggleOn: true
        };
        // Bind methods to this object
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        const {isToggleOn} = this.state;
        return (
            <div>
                <WarningBanner warn={isToggleOn} />
                <button onClick={this.handleClick}>
                    {isToggleOn ? 'Включено' : 'Выключено'}
                </button>
            </div>
        );
    }
}

export default ToggleButton;
