import React from 'react';
import {s} from "../../../App.tsx";
import categories from "../Categories.tsx";

interface  Props{
    onSelectCategory: (category: string) => void;
}
function ExpenseFilter({onSelectCategory}:Props) {
    return (
        <select className="form-select"
            onChange={e => onSelectCategory(e.target.value)
        }>
            <option value="">All Categories</option>
            {categories.map((category) =>
                <option key={category} value={category}>{category}</option>)}
        </select>
    );
}

export default ExpenseFilter;