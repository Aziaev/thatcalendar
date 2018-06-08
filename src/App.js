import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Grid, Nav, Navbar, NavItem, Row } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";

const App = () => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/"> Calendar SPA </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={2} href="#">
          <Link to="/about">About</Link>
        </NavItem>
      </Nav>
    </Navbar>

    <Grid>
      <Row className="show-grid">
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </Row>
    </Grid>
  </div>
);

export default App;
