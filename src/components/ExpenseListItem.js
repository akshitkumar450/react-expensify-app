import React from 'react';
import { removeExpense } from '../actions/expenses'
import { connect } from 'react-redux'

// dispatch method is on props.dispatch
// here we have destructure it .
const ExpenseListItem = ({ dispatch, des, amount, createdAt, id }) => (
    <div>
        <h3>{des}</h3>
        <p>{amount}-{createdAt}</p>

        <button onClick={(e) => {
            dispatch(removeExpense({ id }))
        }}>remove</button>

    </div>
)
// if first arg is not given -> means we are not getting any thing from store back (valid)
//  it just access to dispatch
export default connect()(ExpenseListItem)
