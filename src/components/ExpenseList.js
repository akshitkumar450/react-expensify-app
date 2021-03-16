import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'

// step -2
// connect method is used to use the store (connect the component with store)
// using connect method we can use redux store without passing them as the props

const ExpenseList = (props) => (
    <div>
        <h1> Expense List </h1>
        {props.expenses.map((item) => {
            return <ExpenseListItem key={item.id} {...item} />
        })}
    </div>
)

//  state from the store
//  it has expenses and filters object
// this component can access from store and send to the component with props
//  as the store data changes it will rerender it 

const mapStateToProps = (state) => {
    return {
        // to get the filtered data back
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

// first arg -> data which we want to use from store
// second ard -> component which we want to use

export default connect(mapStateToProps)(ExpenseList)


// const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)
// export default ConnectedExpenseList;