import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listDesigns } from '../actions/housedesignActions';
import Design from '../components/Design';
import Loader from '../components/Loader';
import Message from '../components/Message';

const DesignScreen = () => {
  const dispatch = useDispatch();

  const housedesignList = useSelector((state) => state.housedesignList);
  const { loading, error, designs } = housedesignList;

  useEffect(() => {
    dispatch(listDesigns());
  }, [dispatch]);

  return (
    <>
      <Container className="py-4">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error} </Message>
        ) : (
          <Row>
            {designs.map((design) => (
              <Col
                className="pt-4"
                key={design._id}
                sm={12}
                md={6}
                lg={4}
                xlg={3}
              >
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
