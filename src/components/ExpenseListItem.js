import React from 'react';
import { Link } from 'react-router-dom'

// here expense is a props , which is a object of expenses
export const ExpenseListItem = ((props) => (
    <div>
        <Link to={`/edit/${props.expense.id}`}>
            <h3>{props.expense.des}</h3>
        </Link>
        <p>{props.expense.amount}-{props.expense.createdAt}</p>
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
