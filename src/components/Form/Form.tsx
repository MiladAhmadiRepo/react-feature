// @flow
import {FormEvent, useRef, useState} from "react";
import {Field, FieldValue, FieldValues, useForm} from "react-hook-form";
import  z from 'zod';
import  {zodResolver} from '@hookform/resolvers/zod';
type Props = {};

//this is a validation for form
const schema=z.object({
    name: z.string().min(3,{message:'name must be at least 3 characters '}),
    age: z.number({invalid_type_error:'age field is required'}).min(18 , {message:'age should be older than 18 '}).max(99)
});

//this is an interface for the form data
//this is like
//interface FormData{
//    name:string;
//    age:number;
//}
type FormData=z.infer<typeof schema>;

export function Form(props?: Props) {

    const {register, handleSubmit, formState: {errors,isValid}} = useForm<FormData>({
        resolver: zodResolver(schema )
    });
    const onSubmit = (data: FieldValues) => console.log(data.toString())
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="Mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name"  {...register("name", )}
                       type="text" className="form-control"/>

                {errors.name && <p className="text-danger">{errors.name?.message}</p>}
            </div>
            <div className="Mb-3 mt-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input id="age"
                       {...register("age", {valueAsNumber:true})}
                       type="number" className="from-control"/>
            </div>
            {errors.age && <p className="text-danger">{errors.age?.message}</p>}

            <div className="Mb-3 mt-3">
                <button disabled={!isValid} className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    );
};