import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../features/cartSlice";
import QntBtns from "./QntBtns";
import Wish from "./Wish";

function ProductCard({ ele }) {

  return (
    <Card className="h-100 p-1 position-relative">
      <Card.Img className="img-thumbnail" variant="top" src={ele.thumbnail} />
      <Wish ele={ele} />
      <Card.Body className="px-2">
        <Card.Subtitle className="text-secondary small mb-2">
          {ele.title}
        </Card.Subtitle>
        <div className="d-flex gap-3 mb-2">
          <span className="py-1 px-2 small rounded-3 bg-light bb-2g-gradient">
            ₹ {ele.price} /-
          </span>
          <span className="py-1 px-2 small rounded-3 bg-light bg-gradient">
            ⭐️ {ele.rating}
          </span>
        </div>
        <div className="d-flex gap-3">
          <Link to={`product/${ele.id}`}>
            <Button variant="primary" size="sm">
              More
            </Button>
          </Link>

          <QntBtns ele={ele} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
