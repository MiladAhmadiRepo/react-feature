// @flow
import {FormEvent, useRef, useState} from "react";
import {Field, FieldValue, FieldValues, useForm} from "react-hook-form";
import  z from 'zod';
import  {zodResolver} from '@hookform/resolvers/zod';
type Props = {};

const  categoryEnum:string[] =[
 "Groceries",
 "Groceries" ,
 "Entertainment"
]
//this is a validation for form
const schema = z.object({
    description: z.string().min(5,{message:'name must be at least 5 characters '}),
    amount: z.number({invalid_type_error:'age field is required'}).min(18 , {message:'age should be older than 18 '}).max(99),
    category:  z.custom<string>((val) => categoryEnum.includes(val)),
});

//this is an interface for the form data
//this is like
//interface FormData{
//    description:string;
//    amount:number;
//    category:string;
//}
type FormData=z.infer<typeof schema>;

export function ExpenseListForm(props?: Props) {

    const {register, handleSubmit, formState: {errors,isValid}} = useForm<FormData>({
        resolver: zodResolver(schema )
    });
    const onSubmit = (data: FieldValues) => console.log(data.toString())
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="Mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input id="description"  {...register("description",)}
                       type="text" className="form-control"/>
                {errors.description && <p className="text-danger">{errors.description?.message}</p>}
            </div>
            <div className="Mb-3 mt-3">
                <label htmlFor="amount" className="form-label">Age</label>
                <input id="amount"
                       {...register("amount", {valueAsNumber: true})}
                       type="number" className="from-control"/>
            </div>
            {errors.amount && <p className="text-danger">{errors.amount?.message}</p>}
            <div className="Mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input id="description"  {...register("description",)}
                       type="text" className="form-control"/>
                {errors.description && <p className="text-danger">{errors.description?.message}</p>}
            </div>
            <div className="sm:col-span-3">
                <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">Category</label>
                <div className="mt-2 grid grid-cols-1">
                    <select id="category" name="category" autoComplete="country-name"
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                        <option>Groceries</option>
                        <option>Utilities</option>
                        <option>Entertainment</option>
                    </select>

                </div>
            </div>
            <div className="Mb-3 mt-3">
                <button disabled={!isValid} className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>


)
    ;
};