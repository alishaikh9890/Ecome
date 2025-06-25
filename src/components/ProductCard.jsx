import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartActions } from '../features/cartSlice'
import QntBtns from './QntBtns'

function ProductCard({ele}) {

    const dispatch = useDispatch()


  return (
    <Card className='h-100 p-1' >
        <Card.Img className='img-thumbnail' variant="top" src={ele.thumbnail} />
        <Card.Body className='px-2'>
            <Card.Subtitle>{ele.title}</Card.Subtitle>
            <Card.Text>
                {ele.price}
            </Card.Text>
            <div className='d-flex gap-2'>
                <Link to={`product/${ele.id}`}>
                    <Button variant="primary" size="sm">More</Button>
                </Link>
               
                 <QntBtns ele={ele}/>    
            </div>
            </Card.Body>
    </Card>
  )
}

export default ProductCard