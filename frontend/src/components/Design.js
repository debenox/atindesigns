import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import WeekendIcon from '@mui/icons-material/Weekend';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const Design = ({ design }) => {
  return (
    <>
      <Card className="mb-3 pb-3 ">
        <Link to={`/design/${design._id}`} className="inner">
          <Card.Img className="img" src={design.image} variant="top" />
        </Link>

        <Card.Body>
          <Card.Title as="div" className="fw-bold">
            {design.name}
          </Card.Title>

          <Card.Text as="div">
            <Row className="py-3">
              <Col sm={2}>
                <HotelIcon />
                <p>{design.bed} </p>
              </Col>
              <Col sm={2}>
                <BathtubIcon />
                <p>{design.bath} </p>
              </Col>
              <Col sm={2}>
                <WeekendIcon />
                <p>{design.lounge} </p>
              </Col>
              <Col sm={2}>
                <RestaurantMenuIcon />
                <p>{design.dinning} </p>
              </Col>
              <Col sm={2}>
                <DirectionsCarIcon />
                <p>{design.garage} </p>
              </Col>
            </Row>
          </Card.Text>
          <Link to={`/design/${design._id}`} className="d-grid">
            <Button variant="dark">View Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Design;
