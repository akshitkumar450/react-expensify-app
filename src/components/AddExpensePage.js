import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1> Add expense</h1>
        <ExpenseForm
            // when the form get submitted all data will be sent bt ExpenseForm
            onSubmit={(expense) => {
                // console.log(expense);
                // to add new expenses to store
                props.dispatch(addExpense(expense))
                // for redirecting to other page (dashboard)
                props.history.push('/')
            }}
        />
    </div>
)
export default connect()(AddExpensePage)