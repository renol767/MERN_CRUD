import './App.css';
import React from 'react';

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


// Import Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import Components
import CreateData from "./components/create.component";
import EditData from "./components/edit.component";
import ListData from './components/list.components';

function App() {
  return (<Router>
    <div className="App">
      {/* Nav Bar */}
      <Container>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">CRUD MERN</Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create"} className="nav-link">
                  Add Data
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/list"} className="nav-link">
                  List Data
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </Container>
      {/* Body */}
      <Container>
        <br></br>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              {/* Route */}
              <Switch>
                <Route path="/create" component={CreateData} />
                <Route path="/edit/:id" component={EditData} />
                <Route path="/list" component={ListData} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;
