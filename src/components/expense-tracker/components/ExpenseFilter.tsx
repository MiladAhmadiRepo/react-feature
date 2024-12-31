import React from 'react';

interface  Props{
    onSelectCategory: (category: string) => void;
}
function ExpenseFilter({onSelectCategory}:Props) {
    return (
        <select className="form-select"
            onChange={e => onSelectCategory(e.target.value)
        }>
            <option value="">All Categories</option>
            <option value="Utilities">Utilities</option>
            <option value="Groceries">Groceries</option>
            <option value="Entertaiment">Entertaiment</option>
        </select>
    );
}

export default ExpenseFilter;