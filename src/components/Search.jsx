import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { productActions } from '../features/productSlice';

const Search = () => {

     const dispatch = useDispatch()


    function handleChange(e){
        setTimeout(()=>{
            dispatch(productActions.setSearch(e.target.value))
        }, 2000)
    }


    return (
        <div>
             <Form.Control onChange={handleChange} />
        </div>
    );
}

export default Search;
