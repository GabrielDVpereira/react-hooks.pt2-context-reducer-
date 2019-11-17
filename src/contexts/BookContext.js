import React, { createContext, useReducer, useEffect } from 'react';
import { bookRedeucer } from '../reducers/bookReducer';

export const BookContext = createContext();

export function BookContextProvider(props){
    const [books, dispatch] = useReducer(bookRedeucer,[], ()=>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [] //function executes and the returned value will be the state value
    });

    useEffect(()=> {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])
    useEffect(()=> {
        localStorage.setItem('books', JSON.stringify(books));
    }, [])

    return(
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    );
}