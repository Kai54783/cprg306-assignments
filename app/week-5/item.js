import React from 'react';

export default function Item({name, quantity, category}){

    return(
        <li>
            <span>{name}</span>
            <span>Quantity: {quantity}</span>
            <span>Category: {category}</span>
        </li>
    );
}