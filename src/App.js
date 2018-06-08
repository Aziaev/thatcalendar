import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Grid, Nav, Navbar, NavItem, Row } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import About from "./views/About";
import Home from "./views/Home";

const App = () => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Thatcalendar SPA</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem>
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
