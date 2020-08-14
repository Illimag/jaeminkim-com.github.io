import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { LinkContainer } from 'react-router-bootstrap';

import './App.css';

const Test0 = () => <span>test0</span>;

const Test1 = () => <span>test1</span>;

const Test2 = () => <span>test2</span>;

const App = () => (
  <MemoryRouter>
    <Container className="p-3">
      <Jumbotron>

          <Switch>
            <Route path="/test1">
              <Test1 />
            </Route>
            <Route path="/test2">
              <Test2 />
            </Route>
            <Route path="/"> 
              <Test0 />
            </Route>
          </Switch>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">JAEMINKIM.COM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            <LinkContainer to="/">
              <Nav.Link>test0</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/test1">
              <Nav.Link>test1</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/test2">
              <Nav.Link>test2</Nav.Link>
            </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </Jumbotron>
    </Container>
  </MemoryRouter>
);

export default App;
