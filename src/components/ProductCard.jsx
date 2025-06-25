import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartActions } from '../features/cartSlice'
import QntBtns from './QntBtns'

function ProductCard({ele}) {

    const dispatch = useDispatch()


  return (
    <Card className='h-100' >
        <Card.Img variant="top" src={ele.thumbnail} />
        <Card.Body>
            <Card.Title>{ele.title}</Card.Title>
            <Card.Text>
                {ele.price}
            </Card.Text>
            <div className='d-flex gap-2'>
                <Link to={`product/${ele.id}`}>
                    <Button variant="primary" size="sm">More</Button>
                </Link>
                <Button onClick={() => dispatch(cartActions.addToCard(ele)) } variant="warning" size="sm">Add</Button>
                 <QntBtns/>    
            </div>
            </Card.Body>
    </Card>
  )
}

export default ProductCard