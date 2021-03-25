import React from 'react';
import { Link, NavLink } from 'react-router-dom';


// if we want to show a component on all the pages we put it outside the switch tag
const Header = () => (
    <div>
        <h1>Expensify App</h1>
        <NavLink to='/dashboard' activeClassName='active' exact={true}>Home</NavLink>
        <NavLink to='/create' activeClassName='active'>Create</NavLink>
        <NavLink to='edit' activeClassName='active'>edit</NavLink>
    </div>
)
export default Header