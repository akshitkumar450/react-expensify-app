import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import './styles/style.css'

const DashboardPage = () => (
    <div>
        <p> this is dashboard Page</p>
    </div>
)

const AddExpensePage = () => (
    <div>
        <p> this is add expense Page</p>
    </div>
)
const EditExpensePage = () => (
    <div>
        <p> this is edit expense Page</p>
    </div>
)
// using Link browser does not refresh
// and we can link btw the pages
const Error = () => (
    <div>
        <p>404</p>
        <Link to='/'>go home</Link>
    </div>
)

// if we want to show a component on all the pages we put it outside the switch tag
const Header = () => (
    <div>
        <h1>Expensify App</h1>

        <Link to='/'>Home</Link>
        <Link to='/create'>Create</Link>
        <Link to='edit'>edit</Link>

        <NavLink to='/' activeClassName='active' exact={true}>Home</NavLink>
        <NavLink to='/create' activeClassName='active'>Create</NavLink>
        <NavLink to='edit' activeClassName='active'>edit</NavLink>
    </div>
)

const route = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={DashboardPage} exact={true}></Route>
                <Route path='/create' component={AddExpensePage}></Route>
                <Route path='/edit' component={EditExpensePage}></Route>
                <Route component={Error}></Route>
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(route, document.getElementById('app'))