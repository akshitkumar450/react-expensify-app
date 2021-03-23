import React from 'react';
import { connect } from 'react-redux'
import Expensestotal from '../selectors/Expenses-total'
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral'

const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(expensesTotal).format('$0,0.00')
    return (
        <div>
            <h1>
                viewing{expenseCount} {expenseWord} totaling {formattedTotal}
            </h1>
        </div>
    )
}
const mapStateToProps = (state) => {
    const visible = getVisibleExpenses(state.expenses, state.filters)
    return {
        expenseCount: visible.length,
        expensesTotal: Expensestotal(visible)
    }
}
export default connect(mapStateToProps)(ExpenseSummary);