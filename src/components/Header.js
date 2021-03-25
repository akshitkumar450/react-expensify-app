import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth'
import { connect } from 'react-redux'


// if we want to show a component on all the pages we put it outside the switch tag
const Header = (props) => (
    <div>
        <h1>Expensify App</h1>
        <NavLink to='/dashboard' activeClassName='active' exact={true}>Home</NavLink>
        <NavLink to='/create' activeClassName='active'>Create</NavLink>
        <NavLink to='edit' activeClassName='active'>edit</NavLink>

        <button onClick={props.dispatch(startLogout)}>logout</button>
    </div>
)

// const mapDispatchToProps = (dispatch) => {
//     return {
//         startLogout: () => dispatch(startLogout())
//     }
// }

export default connect()(Header)