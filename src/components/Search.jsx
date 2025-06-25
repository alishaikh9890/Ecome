import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { productActions } from '../features/productSlice';

const Search = () => {
    const [input , setInput] = useState("")
     const dispatch = useDispatch()

    // function handleChange(e){
    //     setTimeout(()=>{
    //         dispatch(productActions.setSearch(e.target.value))
    //     }, 2000)
    // }
    return (
        <div className='d-flex align-items-center position-relative'>
             <Form.Control onChange={(e) => setInput(e.target.value)} />
             <Button onClick={ () => dispatch(productActions.setSearch(input))} variant='outline-secondary' size="sm" className='position-absolute bg-opacity-25' style={{right:"4px"}}>🔍</Button>
        </div>
    );
}

export default Search;
