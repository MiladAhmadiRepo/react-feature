import React from 'react';
import {categories} from "../../../App.tsx";
interface Expense {

}

interface Props {

}

function ExpenseForm({ }: Props) {
    return (
        <>
            <form onSubmit={() => console.log("")}>
                <div className="Mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input id="description"
                           type="text" className="form-control"/>
                </div>
                <div className="Mb-3 mt-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input id="amount"
                           type="number" className="from-control"/>
                </div>

                <div className="Mb-3 mt-3">
                    <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">Category</label>
                    <div className="mt-2 grid grid-cols-1">
                        <select id="category"
                                name="category" autoComplete="country-name"
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                            {categories.map((category) =>
                                <option key={category} value={category}>{category}</option>)}
                        </select>

                    </div>
                </div>
                <div className="Mb-3 mt-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>


        </>
    );
}

export default ExpenseForm;