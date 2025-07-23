import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Spinners from './Spinners';

const Products = () => {

const products = useSelector((state) => state.product.products)

if(!!!products)
    return <Container style={{height:"70vh"}} className='border d-flex justify-content-center align-items-center' >
    <Spinners/>
</Container>
    
else

    return (
        <Container>
            <Row className='g-lg-3 g-2'>
                {products?.map((ele) => (
                        <Col key={ele.id} lg={3} md={4} sm={6} xs={6}>
                            <ProductCard ele={ele} />
                        </Col>
                    ))}
            </Row>
        </Container>
    );
}

export default Products;
