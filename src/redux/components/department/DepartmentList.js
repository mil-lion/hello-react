import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getDepartments} from "../../actions/deptsAction";
import {Link} from "react-router-dom";

class DepartmentList extends Component {

    componentDidMount() {
        // Call Action GET_DEPARTMENTS
        this.props.getDepartments();
    }

    render() {
        return (
            <div>
                <h1>Departments</h1>
                <Link to="/depts/add">Add Department</Link>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Dept #</th>
                            <th>Name</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.departments.map((dept =>
                            <tr key={dept.deptno}>
                                <td>{dept.deptno}</td>
                                <td>{dept.dname}</td>
                                <td>{dept.loc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

DepartmentList.propTypes = {
    departments: PropTypes.array.isRequired,
    getDepartments: PropTypes.func.isRequired
};

export default connect(
    state => ({
        departments: state.depts.departments
    }),
    {getDepartments}
)(DepartmentList);