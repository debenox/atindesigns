import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Container>
        <Navbar variant="dark" expand="lg" className="my-2">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand className="fw-bold">AtinDesign</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to="/designs">
                  <Nav.Link className="px-4">HOUSE DESIGNS</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/furniture">
                  <Nav.Link className="px-4">FURNITURE</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/projects">
                  <Nav.Link className="px-4">PROJECTS</Nav.Link>
                </LinkContainer>
                {userInfo ? (
                  <NavDropdown
                    title={userInfo.name}
                    id="username"
                    className="text-uppercase"
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item className="px-4">
                        PROFILE
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler} className="px-4">
                      LOGOUT
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link className="px-4">SIGN IN</Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
