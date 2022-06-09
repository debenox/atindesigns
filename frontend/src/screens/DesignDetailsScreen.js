import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Card,
  Button,
} from 'react-bootstrap';
import { listDesignDetails } from '../actions/housedesignActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const DesignDetailsScreen = ({ match }) => {
  const dispatch = useDispatch();

  const housedesignDetails = useSelector((state) => state.housedesignDetails);
  const { loading, error, design } = housedesignDetails;

  useEffect(() => {
    dispatch(listDesignDetails(match.params.id));
  }, [dispatch, match]);
  return (
    <>
      <Container>
        <Link className="btn btn-dark my-3" to="/designs">
          Go Back
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error} </Message>
        ) : (
          <Row>
            <Col md={6} className="py-3">
              <Image src={design.image} alt={design.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{design.name} </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="fw-bold"> Description: </span>
                  {design.description}
                </ListGroup.Item>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h4>Key Features/Dimensions</h4>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Width</Col>
                        <Col>10.0m</Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Length</Col>
                        <Col>10.0m</Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Kitchen</Col>
                        <Col>10.0m</Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Bedrooms</Col>
                        <Col>10.0m</Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Garage</Col>
                        <Col>10.0m</Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col className="fw-bold">Total Area</Col>
                        <Col>10.0m</Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-grid">
                      <Button className="btn-block" type="button">
                        {`Download the ${design.name} Brochure`}{' '}
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </ListGroup>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default DesignDetailsScreen;
