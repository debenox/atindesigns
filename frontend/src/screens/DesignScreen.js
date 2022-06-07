import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listDesigns } from '../actions/housedesignActions';
import Design from '../components/Design';

const DesignScreen = () => {
  const dispatch = useDispatch();

  const housedesignList = useSelector((state) => state.housedesignList);
  const { loading, error, designs } = housedesignList;

  useEffect(() => {
    dispatch(listDesigns());
  }, [dispatch]);

  return (
    <>
      <Container className="py-5">
        <h2>Designs</h2>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error} </h2>
        ) : (
          <Row>
            {designs.map((design) => (
              <Col key={design._id} sm={12} md={6} lg={4} xlg={3}>
                <Design design={design} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default DesignScreen;
