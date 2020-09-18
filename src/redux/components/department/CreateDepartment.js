import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {createDepartment} from "../../actions/deptsAction";

class CreateDepartment extends Component {
    constructor(props) {
        super(props);
        // Initial State
        this.state = {
            deptno: "",
            dname: "",
            loc: ""
        }
        // Bind Function
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("createNewDepartment", this.state);
        this.props.createDepartment(this.state, this.props.history);
    }

    render() {
        console.log(this.props.errors);
        return (
            <div>
                <h1>Create New Department</h1>
                <fieldset>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Dept #
                            <input
                                type="text"
                                name="deptno"
                                value={this.state.deptno}
                                onChange={this.handleChange}
                            />
                            <p style={{color:'red'}}>{this.props.errors.deptno}</p>
                        </label>
                        <br/>
                        <label>
                            Name
                            <input
                                type="text"
                                name="dname"
                                value={this.state.dname}
                                onChange={this.handleChange}
                            />
                            <p style={{color:'red'}}>{this.props.errors.dname}</p>
                        </label>
                        <br/>
                        <label>
                            Location
                            <input
                                type="text"
                                name="loc"
                                value={this.state.loc}
                                onChange={this.handleChange}
                            />
                            <p style={{color:'red'}}>{this.props.errors.loc}</p>
                        </label>
                        <br/>
                        <input type="submit" value="Отправить" />
                    </form>
                </fieldset>
            </div>
        );
    }
}

CreateDepartment.propTypes = {
    createDepartment: PropTypes.func.isRequired,
    errors: PropTypes.object
};

export default connect(
    state => ({
        errors: state.depts.errors
    }),
    {createDepartment}
)(CreateDepartment);