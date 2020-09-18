import React from "react";
import {NavLink} from "react-router-dom";
import "../../menu.css";

export default function Header(props) {
    return (
        <nav>
            <table>
                <tbody>
                    <tr>
                        <td><NavLink exact to='/' activeClassName='active-link'>Home</NavLink></td>
                        <td><NavLink to='/about' activeClassName='active-link'>About</NavLink></td>
                        <td><NavLink to='/emps' activeClassName='active-link'>Employees</NavLink></td>
                        <td><NavLink exact to='/depts' activeClassName='active-link'>Department List</NavLink></td>
                        <td><NavLink to='/depts/10' activeClassName='active-link'>Department</NavLink></td>
                        <td><NavLink to='/clock' activeClassName='active-link'>Clock</NavLink></td>
                        <td><NavLink to='/game' activeClassName='active-link'>Game</NavLink></td>
                        <td><NavLink to='/calc' activeClassName='active-link'>Calculator</NavLink></td>
                        <td><NavLink to='/playlist' activeClassName='active-link'>Playlist</NavLink></td>
                    </tr>
                </tbody>
            </table>
        </nav>
    );
}