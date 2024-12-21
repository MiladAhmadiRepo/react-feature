// @flow
import {FormEvent, useRef} from "react";

type Props = {};

export function Form(props?: Props) {
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    let person= {name: '', age: 0};
    const handleSubmmit = (event: FormEvent) => {
        event.preventDefault();
        if(nameRef.current!==null) {
            person.name = nameRef.current.value;
        }
        if(ageRef.current!==null) {
            person.age = +ageRef.current.value;
        }
        console.log(person);

    }
    return (
        <form onSubmit={handleSubmmit}>
            <div className="Mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" ref={nameRef} type="text" className="form-control"/>
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