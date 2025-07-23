import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import QntBtns from '../components/QntBtns'

function Cart() {
    let cart = useSelector((state) => state.cart.cart)

    console.log(cart)

  return (

         <Container>
          {cart && cart.map((ele) => (
                <Card className='p-1 mt-2'>
                  <Row>
                    <Col xs="4">
                      <Card.Img className="img-thumbnail" variant="top" src={ele.thumbnail} />
                    </Col>
                    <Col xs="8">
                      <Card.Body className='p-2'>
                        <Card.Subtitle className='small text-secondary mb-2'>{ele.title}</Card.Subtitle>
          
                        <div className="d-flex gap-3">
                          <span className="py-1 px-2 rounded-3 bg-light bb-2g-gradient">₹ {ele.price} /-</span>
                          <span className="py-1 px-2 rounded-3 bg-light bg-gradient">⭐️ {ele.rating}</span>
                        </div>
          
                        <Card.Text>
                          
                        </Card.Text>
                        <div className='d-flex gap-3'>
                          <Link to={`/product/${ele.id}`}><Button variant="info" size='sm'>More</Button></Link>
                          <QntBtns ele={ele}/>
                      </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ))}
        </Container>
  )
}

export default Cart