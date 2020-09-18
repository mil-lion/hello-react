import {PureComponent} from "react";

class PureCounterButton extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {count: 1};
    }

    render() {
        console.log("PureCounterButton", "render()");
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

export default PureCounterButton;
