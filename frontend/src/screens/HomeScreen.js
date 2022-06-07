import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
const HomeScreen = () => {
  return (
    <>
      {/* --------------------- BANNER ------------------------ */}
      <section>
        <div className="banner ">
          <div className="overlay d-flex  align-items-center">
            <Container>
              <h1 className="mx-auto text-center">
                Are you looking to build/invest in real estate?{' '}
              </h1>
              <p className="mx-auto text-center pt-4">
                Find ideas/projects here!
              </p>
            </Container>
          </div>
        </div>
      </section>

      {/* --------------------- ABOUT ------------------------ */}

      <section>
        <Container className="py-5">
          <h1 className="text-center py-5">About Us</h1>

          <Row>
            <Col>
              <h2 className="py-3">WHO WE ARE</h2>
              <p>
                www.atin.design is an online platform created to showcase design
                concepts in housing and related products. It is fully owned by
                ATIN Establishments Ltd – A Ugandan registered company.
              </p>
              <p>At ATIN, our mission is two-fold;</p>
            </Col>

            <Col md={6}>
              <p>
                i) to make ownership of quality homes/houses within reach for
                the ordinary Ugandan/East African and,
              </p>

              <p>
                ii) contribute to the improvement of the built environment in
                Uganda and East Africa. To do this, we are exploring alternative
                methods and materials of building houses/homes. We are also
                piloting innovative real estate projects into which adventurous
                East Africans can invest. skills
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --------------------- RATIONALE ------------------------ */}

      <section>
        <Container fluid className="vision">
          <Container className="py-5">
            <h1 className="text-center py-5">What we do</h1>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img src="/images/rationale.jpg" />
                </Card>
              </Col>

              <Col md={6} className="ms-auto">
                <h2 className="py-3">OUR RATIONALE</h2>
                <p>
                  The conventional methods of real estate development and/or
                  home-building is highly inefficient – it requires a
                  bureaucratic involvement of architects, engineers, material
                  suppliers, main contractors, and subcontractors such as
                  electricians, plumbers, carpenters, roofers, metal
                  fabricators, painters etc. This results in an extraordinarily
                  expensive, time consuming, and unpredictable build process. By
                  improving the real estate development and/or home-building
                  process and experience, we hope to make decent houses
                  accessible to more people in Uganda and East Africa.
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      {/* --------------------- OUR APPROACH ------------------------ */}

      <section>
        <Container className="py-5">
          <h1 className="text-center pt-5">Our Progams</h1>
          <Row>
            <Col>
              <h2 className="py-5 mx-auto text-center">
                We conceive, design, build and share house designs, furniture,
                real estate projects and, related products
              </h2>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Card className="program">
                <Card.Body>
                  <Card.Title>
                    <h2 className="py-3">Design</h2>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      We have a wide variety of house designs, furniture designs
                      and innovative real estate projects from which you can
                      choose. Our design philosophy is informed by a desire to
                      respond to the modern tropical African lifestyle - i.e.,
                      we focus on hedonistic (pleasure-conscious) architecture
                      meant to excite the senses. Our design program thus
                      includes;
                    </p>
                    <p>
                      i) a natural blend between the indoors and outdoors -
                      interplays of sunlight and shade; hot and cold; abundant
                      natural light; natural ventilation; natural musical
                      sounds;
                    </p>
                    <p>
                      ii) loft spaces for the casual unprogrammed modern
                      lifestyle;
                    </p>
                    <p>
                      iii) blending local/indigenous with modern materials –
                      glass/steel/gypsum etc.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="program">
                <Card.Body>
                  <Card.Title>
                    <h2 className="py-3">
                      Manufacturing (Computer Aided Manufacturing – CAM)r
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      We fabricate houses that can then be installed to your
                      site by either our team or any fairly competent set of
                      builders/technicians – Promoted under our ‘HOUSE IN A BOX’
                      slogan . Our building system/components allow for
                      customization of the layout while maintaining it’s prefab
                      nature.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="program">
                <Card.Body>
                  <Card.Title>
                    <h2 className="py-3">Installation/Construction</h2>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      We build our creations mostly as a proof of concept
                      thereafter, we train independent artisans/builders. We may
                      build for some of our clients however this service is
                      limited to our domain/area of operation.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeScreen;
