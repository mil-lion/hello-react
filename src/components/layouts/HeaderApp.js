import React from 'react';
import {NavLink} from "react-router-dom";
import "../../menu.css"
import ThemeToggleButton from "../ThemeToggleButton";
import {UserContext} from "../../context";

function HeaderApp(props) {
    return (
        <nav>
            <table>
                <tbody>
                    <tr>
                        <td><NavLink exact to="/" activeClassName='active-link'>Home</NavLink></td>
                        <td><NavLink to="/about" activeClassName='active-link'>About</NavLink></td>
                        <td><NavLink to="/welcome" activeClassName='active-link'>Welcome</NavLink></td>
                        <td><NavLink to="/clock" activeClassName='active-link'>Clock</NavLink></td>
                        <td><NavLink to="/game" activeClassName='active-link'>Game</NavLink></td>
                        <td><NavLink to="/calc" activeClassName='active-link'>Calculator</NavLink></td>
                        <td><NavLink to="/emps" activeClassName='active-link'>Employees</NavLink></td>
                        <td><NavLink to="/dept/10" activeClassName='active-link'>Department</NavLink></td>
                        <td><ThemeToggleButton /></td>
                        <td>
                            <UserContext.Consumer>
                                {({user}) => user}
                            </UserContext.Consumer>
                        </td>
                    </tr>
                </tbody>
            </table>
        </nav>
    );
}

export default HeaderApp;
