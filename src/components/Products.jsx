import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {

const products = useSelector((state) => state.product.products)


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
