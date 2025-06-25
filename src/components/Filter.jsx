import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../features/productSlice';

const Filter = () => {

    const categories = useSelector((state)=> state.product.categories)
    const dispatch = useDispatch()

    return (
      <div className='container overflow-x-auto mb-3'>
          <div className='d-flex gap-3 align-items-center w-auto'>
            {
                categories.map((ele)=><Button size="sm" style={{whiteSpace: "nowrap"}} key={ele.slug} onClick={() => dispatch(productActions.setCategory(ele.slug))} variant='secondary'>{ele.name}</Button>)
            }   
        </div>
      </div>
    );
}

export default Filter;
