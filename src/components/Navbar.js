import React, {useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
export function Navbar(){

    const { books } = useContext(BookContext); 

    return (
        <div className="navbar">
            <h1>Ninja readind list</h1>
            <p>Currently you have {books.length } books to get through</p>
        </div>
    );

}