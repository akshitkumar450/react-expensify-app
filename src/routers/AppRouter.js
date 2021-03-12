import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from './../components/DashboardPage'
import AddExpensePage from './../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/EditExpensePage'
import Header from './../components/Header'
import NotFound from './../components/NotFound'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={DashboardPage} exact={true}></Route>
                <Route path='/create' component={AddExpensePage}></Route>
                <Route path='/edit' component={EditExpensePage}></Route>
                <Route path='/help' component={HelpPage}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter