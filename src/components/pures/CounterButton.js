import {Component} from "react";

// Class Component CounterButton
class CounterButton extends Component {
    constructor(props) {
        super(props);
        // Initial State
        this.state = {count: 1};
    }

    // Component Lifecycle
    shouldComponentUpdate(nextProps, nextState) {
        console.log("CounterButton", "shouldComponentUpdate");
        if (this.props.color !== nextProps.color) {
            return true;
        }
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    // Render Component
    render() {
        console.log("CounterButton", "render()");
        return (
            <button
                color={this.props.color}
                onClick={() => this.setState(state => ({count: state.count + 1}))}
            >
                Счётчик: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;