import React from 'react';

export const ExpenseListItem = ({ des, amount, createdAt }) => (
    <div>
        <h3>{des}</h3>
        <p>{amount}-{createdAt}</p>
    </div>
)
