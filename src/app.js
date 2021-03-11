import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
const Error = () => (
    <div>
        <p>404</p>
    </div>
)

const route = (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={DashboardPage} exact={true}></Route>
            <Route path='/create' component={AddExpensePage}></Route>
            <Route path='/edit' component={EditExpensePage}></Route>
            <Route component={Error}></Route>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(route, document.getElementById('app'))