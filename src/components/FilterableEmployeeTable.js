import React, {Component, Fragment} from 'react';
import {ThemeContext} from "../context";

// Component SearchBar
function SearchBar({filterText, filterIsComm, onChange}/*props*/) {
    // const {filterText, filterIsComm, onChange} = props;
    return (
        <fieldset>
            <legend>Filter</legend>
            <input
                type="text"
                placeholder="Search..."
                name="filterText"
                value={filterText}
                onChange={onChange}
            />
            <p>
                <input
                    type="checkbox"
                    name="filterIsComm"
                    checked={filterIsComm}
                    onChange={onChange}
                />
                Only commissioners
            </p>
        </fieldset>
    );
}

// Component EmployeeRow
function EmployeeRow({emp}/*props*/) {
    // const {emp} = props;
    const job = emp.comm == null
        ? emp.job
        : <span style={{color: "red"}}>{emp.job}</span>;
    return (
        <tr>
            <td>{emp.empno}</td>
            <td>{emp.ename}</td>
            <td>{job}</td>
            <td>{emp.sal}</td>
            <td>{emp.comm}</td>
        </tr>
    );
}

// Component DepartmentRow
function DepartmentRow(props) {
    return (
        <Fragment>
            <tr><th colSpan="5"></th></tr>
            <tr>
                <th colSpan="5">Department #{props.deptno}</th>
            </tr>
        </Fragment>
    );
}

function DepartmentRow2(props) {
    return (
        <>
            <tr><th></th></tr>
            <tr>
                <th colSpan="5">Department #{props.deptno}</th>
            </tr>
        </>
    );
}

// Component EmployeeTable
function EmployeeTable(props) {
    const {filterText, filterIsComm, employees} = props;
    const rows = [];
    let lastDeptno = null;
    // props.employees.forEach((e) => {
    //     // use filter
    //     if (props.filterIsComm && e.comm == null) {
    //         return ; // skip
    //     }
    //     if (!e.ename.includes(props.filterText.toUpperCase())) {
    //         return ; // skip
    //     }
    employees
        .filter(e =>
            (!filterIsComm || e.comm != null)
            && e.ename.includes(filterText.toUpperCase())
        )
        .forEach(e => {
            if (lastDeptno !== e.deptno) {
                // add department row
                rows.push(
                    <DepartmentRow key={'dept' + e.deptno} deptno={e.deptno} />
                );
                lastDeptno = e.deptno;
            }
            // add employee row
            rows.push(
               <EmployeeRow key={'emp' + e.empno} emp={e} />
            );
        });
    return (
        <table border='1'>
            <thead>
                <tr>
                    <th>Emp #</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Salary</th>
                    <th>Commission</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

// Component FilterableEmployeeTable
class FilterableEmployeeTable extends Component {

    // Use Context, way 1
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        // Initial State
        this.state = {
            employees: [],
            filterText: "",
            filterIsComm: false
        };
        // Bind method to this object
        this.handleChange = this.handleChange.bind(this);
    }
    // Component Lyfecycle
    componentDidMount() {
        // get Employees from API
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa('scott:tiger')); // base64
        // fetch("http://test.lionsoft.ru:8888/scott/api/emps", {headers: headers})
        fetch("/scott/api/emps", {headers: headers})
            .then(res => res.json())
            .then(emps => {
                emps.sort((e1, e2) => e1.deptno - e2.deptno); // sort by deptno
                this.setState({employees: emps});
            })
            .catch(err => console.error(err));
    }
    // Handlers
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = name === 'filterIsComm' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    // Render Component
    render() {
        const {employees, filterText, filterIsComm} = this.state;
        const theme = this.context.theme;
        const themeStyle = {backgroundColor: theme.background, color: theme.foreground};
        // filter employees
        return (
            <div>
                <h1>Employees Page</h1>
                <p style={themeStyle}>Filterable Employee Table React Component</p>
                <SearchBar
                    filterText={filterText}
                    filterIsComm={filterIsComm}
                    onChange={this.handleChange}
                />
                <EmployeeTable
                    employees={employees}
                    filterText={filterText}
                    filterIsComm={filterIsComm}
                />
            </div>
        );
    }
}

// Use context, way 2
// FilterableEmployeeTable.contextType = ThemeContext;

export default FilterableEmployeeTable;
/*
 employeeList
 filterText
 filterCheckbox
 --filterEmployee - не нужно сохранять так как можно всегда получить из employeeList
 */