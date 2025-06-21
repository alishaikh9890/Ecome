import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Products = () => {

const products = useSelector((state) => state.product.products)


    return (
        <Container>
            <Row className='g-3'>
                {products?.map((ele) => (
                        <Col key={ele.id} lg={3} md={4} sm={6} xs={6}>
                            <Card className='h-100' >
                                <Card.Img variant="top" src={ele.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{ele.title}</Card.Title>
                                    <Card.Text>
                                        {ele.price}
                                    </Card.Text>
                                    <Button variant="primary" size="sm">More</Button>
                                    <Button variant="warning" size="sm">Add</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </Container>
    );
}

export default Products;
