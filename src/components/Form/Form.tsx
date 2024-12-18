// @flow
import * as React from 'react';

type Props = {

};

export function Form(props?: Props) {
    return (
        <form>
            <div className="Mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" type="text" className="form-control"/></div>
        </form>
    );
};