import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
// here expense is a props , which is a object of expenses
export const ExpenseListItem = ((props) => (
    <div>
        <Link to={`/edit/${props.expense.id}`}>
            <h3>{props.expense.des}</h3>
        </Link>
        <p>
            {numeral(props.expense.amount).format('$0,0.00')}
            -
             {moment(props.expense.createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
))

// ALTERNATE TO DO

// dispatch method is on props.dispatch
// here we have destructure it .
// const ExpenseListItem = ({ des, amount, createdAt, id }) => (
//     <div>
//         <Link to={`/edit/${id}`} />
//         <h3>{des}</h3>
//         <p>{amount}-{createdAt}</p>
//     </div>
// )

// if first arg is not given -> means we are not getting any thing from store back (valid)
//  it just access to dispatch
export default ExpenseListItem
