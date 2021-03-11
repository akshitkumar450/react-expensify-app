import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/style.css'

const dashboardPage = () => (
    <div>
        <p> this is dashboard Page</p>
    </div>
)

const addExpensePage = () => (
    <div>
        <p> this is add expense Page</p>
    </div>
)
const editExpensePage = () => (
    <div>
        <p> this is edit expense Page</p>
    </div>
)

const route = (
    <BrowserRouter>
        <div>
            <Route path='/' component={dashboardPage} exact={true}></Route>
            <Route path='/create' component={addExpensePage}></Route>
            <Route path='/edit' component={editExpensePage}></Route>
        </div>
    </BrowserRouter>
)

ReactDOM.render(route, document.getElementById('app'))