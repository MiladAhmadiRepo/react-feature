// @flow
import {FormEvent, useRef, useState} from "react";
import {Field, FieldValue, FieldValues, useForm} from "react-hook-form";

type Props = {};

interface FormData {
    name: string;
    age: number;
}

export function Form(props?: Props) {

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
    const onSubmit = (data: FieldValues) => console.log(data.toString())
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="Mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name"  {...register("name", {required: true, minLength: 3})}
                       type="text" className="form-control"/>

                {
                    errors.name?.type === 'required' && <p className="text-danger">This field is required</p>}
                {errors.name?.type === 'minLength' &&
                    <p className="text-danger">The name must be at least 3 characters</p>}
            </div>
            <div className="Mb-3 mt-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input id="age"
                       {...register("age", {min: 18, max: 99})}
                       type="number" className="from-control"/>
            </div>
            <div className="Mb-3 mt-3">
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    );
};