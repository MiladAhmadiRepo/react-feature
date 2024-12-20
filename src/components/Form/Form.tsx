// @flow
import * as React from 'react';
import {FormEvent} from "react";

type Props = {};

export function Form(props?: Props) {
    const handleSubmmit = (event: FormEvent) => {
        event.preventDefault();
        console.log('form submitted');
    }
    return (
        <form onSubmit={handleSubmmit}>
            <div className="Mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" type="text" className="form-control"/>
            </div>
            <div className="Mb-3 mt-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input id="age" type="number" className="from-control"/>
            </div>
            <div className="Mb-3 mt-3">
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    );
};