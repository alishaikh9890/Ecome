import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import QntBtns from "../components/QntBtns";

const Product = () => {
    const {prodId} = useParams()
    const products= useSelector((state) => state.product.products)
    let prod = products.find((ele) => ele.id == prodId)

  return (
    <Container className="">
    {prod && 
      <Card>
        <Row>
          <Col>
            <Card.Img className="img-thumbnail" variant="top" src={prod.thumbnail} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{prod.title}</Card.Title>

              <div className="d-flex gap-3">
                <span className="py-1 px-2 rounded-3 bg-light bg-gradient">{prod.price}</span>
                <span className="py-1 px-2 rounded-3 bg-light bg-gradient">⭐️ {prod.rating}</span>
              </div>

              <Card.Text>
                {prod.description}
              </Card.Text>
              <Button variant="warning">Add to Card</Button>
              <QntBtns/>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    }
    <div>
    {prod && prod.reviews.map((rev) => <ReviewCard key={rev.reviewerName} {...rev} /> )}
    </div>
    </Container>
    
  );
};

export default Product;
