// @flow
import {FormEvent, useRef, useState} from "react";
import {Field, FieldValue, FieldValues, useForm} from "react-hook-form";
import z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

type Props = {};

const categoryEnum = [
    "Groceries",
    "Utilities",
    "Entertainment"
] as const;

interface Item {
    description: string,
    amount: number,
    category: typeof categoryEnum[number];
};


const schema = z.object({
    description: z.string().min(5, {message: 'name must be at least 5 characters '}),
    amount: z.number({invalid_type_error: 'amount field is required'}).min(1, {message: 'amount should be bigger than 1 '}),
    category: z.enum(categoryEnum, {
        errorMap: () => ({message: 'Please select a valid category'})
    })
});

type FormData = z.infer<typeof schema>;

export function ExpenseListForm(props?: Props) {
    const [items, setItems] = useState<Item>([]);
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({
        resolver: zodResolver(schema)
    });
    const onSubmitFunc = (data: FieldValues) => {
        setItems([
            ...items,
            {description: data.description, amount: data.amount, category: data.category} as Item
        ]);
        debugger
        // setItems([...items, {data.description, data.amount, data.category} as Item])
        console.log(data)
    }

    // setTags([...items, {data.description, data.amount, data.category} as Item]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitFunc)}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input id="description"  {...register("description",)}
                           type="text" className="form-control"/>
                    {errors.description && <p className="text-danger">{errors.description?.message}</p>}
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input id="amount"
                           {...register("amount", {valueAsNumber: true})}
                           type="number" className="from-control"/>
                </div>
                {errors.amount && <p className="text-danger">{errors.amount?.message}</p>}

                <div className="sm:col-span-3">
                    <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">Category</label>
                    <div className="mt-2 grid grid-cols-1">
                        <select id="category"
                                {...register("category",)}
                                name="category" autoComplete="country-name"
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                            <option>Groceries</option>
                            <option>Utilities</option>
                            <option>Entertainment</option>
                        </select>

                    </div>
                </div>
                <div className="Mb-3 mt-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

            {/*<div className="container mt-4">*/}
            {/*    <div className="mb-3">*/}
            {/*        <select className="form-select">*/}
            {/*            {*/}
            {/*                categoryEnum.map((category) => (*/}
            {/*                    <option key={category}>{category}</option>*/}
            {/*                ))*/}
            {/*            }*/}
            {/*        </select>*/}
            {/*    </div>*/}

            {/*    <div className="table-responsive">*/}
            {/*        <table className="table table-bordered">*/}
            {/*            <thead>*/}
            {/*            <tr>*/}
            {/*                <th>Description</th>*/}
            {/*                <th>Amount</th>*/}
            {/*                <th>Category</th>*/}
            {/*                <th></th>*/}
            {/*            </tr>*/}
            {/*            </thead>*/}
            {/*            <tbody>*/}
            {/*            {items.map(item => (*/}
            {/*                <tr key={item.id}>*/}
            {/*                    <td>{item.description}</td>*/}
            {/*                    <td>${item.amount.toFixed(2)}</td>*/}
            {/*                    <td>{item.category}</td>*/}
            {/*                    <td>*/}
            {/*                        <button*/}
            {/*                            className="btn btn-outline-danger"*/}
            {/*                            onClick={() => handleDelete(item.id)}*/}
            {/*                        >*/}
            {/*                            Delete*/}
            {/*                        </button>*/}
            {/*                    </td>*/}
            {/*                </tr>*/}
            {/*            ))}*/}
            {/*            <tr>*/}
            {/*                <td><strong>Total</strong></td>*/}
            {/*                <td><strong>${total.toFixed(2)}</strong></td>*/}
            {/*                <td></td>*/}
            {/*                <td></td>*/}
            {/*            </tr>*/}
            {/*            </tbody>*/}
            {/*        </table>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );


}