import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import QntBtns from "../components/QntBtns";
import { useFetchSingleProduct } from "../app/api";

const Product = () => {
    const {prodId} = useParams()

    console.log(prodId)

   const {loading, error, prod} = useFetchSingleProduct(prodId)

  return (
    
      loading ? 
      <>loading...</>
      : error ? 
      <>something went wrong</>
      :
    <Container className="">
      <Card>
        <Row xs="1" md="2">
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
              <QntBtns ele={prod}/>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <div>
      {prod.reviews && prod.reviews.map((rev) => <ReviewCard key={rev.reviewerName} {...rev} /> )}
      </div>
      </Container>
  );
};

export default Product;
