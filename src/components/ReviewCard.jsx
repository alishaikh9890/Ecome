import React from 'react'
import { Button, Card } from 'react-bootstrap'

function ReviewCard({rating, comment, date, reviewerName, reviewerEmail}) {
  return (
    <Card className='my-2'>
    <Card.Body>
    <Card.Title>{[...Array(rating)].map(()=> "⭐️")}</Card.Title>
    <Card.Text>
        {comment}
    </Card.Text>
    </Card.Body>
    <Card.Footer>
     <p className='m-0'> -{reviewerName}</p>
     <small className='fst-italic badge text-secondary'>{reviewerEmail}</small>
    </Card.Footer>
    </Card>
  )
}


export default ReviewCard