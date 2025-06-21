import React from 'react';
import { Pagination } from 'react-bootstrap';

import { productActions } from '../features/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const Page = () => {

const dispatch = useDispatch()
const page = useSelector((state)=> state.product.page)

    return (
        <Pagination className="justify-content-center my-3">
             <Pagination.Item>Prev</Pagination.Item>
             <Pagination.Item>{page}</Pagination.Item>
             <Pagination.Item onClick={()=> dispatch(productActions.nextPage()) }>Next</Pagination.Item>
        </Pagination>
    );
}

export default Page;
