import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Design = ({ design }) => {
  return (
    <Card className="mb-3 pb-3 ">
      <div className="inner">
        <Card.Img className="img" src={design.image} variant="top" />
      </div>

      <Card.Body>
        <Card.Title className="fw-bold">{design.name} </Card.Title>
        <Card.Text>
          <Row className="py-3">
            <Col sm={2}>
              <i class="fa-solid fa-bed"></i>
              <p>{design.bed} </p>
            </Col>
            <Col sm={2}>
              <i class="fa-solid fa-bath"></i>
              <p>{design.bath} </p>
            </Col>
            <Col sm={2}>
              <i class="fa-solid fa-couch"></i>
              <p>{design.bed} </p>
            </Col>
            <Col sm={2}>
              <i class="fa-solid fa-fork-knife"></i>
              <p>{design.bed} </p>
            </Col>
            <Col sm={2}>
              <i class="fa-solid fa-car"></i>
              <p>{design.garage} </p>
            </Col>
          </Row>
        </Card.Text>
        <a href={`/designs/${design._id}`}>
          <Button variant="primary">View Details</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default Design;
