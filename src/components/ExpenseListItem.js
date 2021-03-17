import React from 'react';
import { Link } from 'react-router-dom'

// dispatch method is on props.dispatch
// here we have destructure it .
const ExpenseListItem = ({ des, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`} />
        <h3>{des}</h3>
        <p>{amount}-{createdAt}</p>
    </div>
)
// if first arg is not given -> means we are not getting any thing from store back (valid)
//  it just access to dispatch
export default ExpenseListItem
