// @flow
import * as React from 'react';
import {useEffect, useState} from "react";

export function ProductList({category}: {category:string}) {
    //if you call useeffect with usestate without specified how many time would be run in useeffect 
    //it will stuck in loop , like this :::

    // const [products, setProducts] = useState<string[]>()
    // useEffect(() => {
    //     console.log('fetching Products ')
    //     setProducts(['Clothing','Household'])
    // }, );


    //--------------------------------------------------------------------
    //you can set second parameter to specified how many times it would be repeated
    // useEffect(() => {
    //     console.log('fetching Products ')
    //     setProducts(['Clothing','Household'])
    // },[] );  //it would be one time
    //--------------------------------------------------------------------
    const [products, setProducts] = useState<string[]>([]);
    useEffect(() => {
        console.log('Fetching products in ' , category);
        setProducts(['Clothing','Household'])
    }, [category]);
    return (
        <div>
        Product Lits
        </div>
    );
};