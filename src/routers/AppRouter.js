import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from './../components/DashboardPage'
import AddExpensePage from './../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/EditExpensePage'
import Header from './../components/Header'
import NotFound from './../components/NotFound'
import LoginPage from '../components/LoginPage';
import { createBrowserHistory } from "history";

export const history = createBrowserHistory()
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => (
    <BrowserRouter history={history}>
        <div>
            <Header />
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true}></PublicRoute>
                <PrivateRoute path='/dashboard' component={DashboardPage}></PrivateRoute>
                <PrivateRoute path='/create' component={AddExpensePage}></PrivateRoute>
                <PrivateRoute path='/edit' component={EditExpensePage}></PrivateRoute>
                <Route path='/help' component={HelpPage}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter