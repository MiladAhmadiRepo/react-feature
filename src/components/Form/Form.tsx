// @flow
import {FormEvent, useRef, useState} from "react";

type Props = {};

export function Form(props?: Props) {
    const [person, setPerson] = useState({
        name: '',
        age: 0
    })
    const handleSubmmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(person);

    }
    return (
        <form onSubmit={handleSubmmit}>
            <div className="Mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" onChange={(event) => {
                    setPerson({...person, name: event.target.value})
                }} type="text" className="form-control"/>
            </div>
            <div className="Mb-3 mt-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input id="age"
                       onChange={(event) => {
                           setPerson({...person, age: +event.target.value})
                       }}
                       type="number" className="from-control"/>
            </div>
            <div className="Mb-3 mt-3">
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    );
};