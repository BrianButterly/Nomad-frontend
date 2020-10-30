import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

class Menu extends React.Component {

  render() {
    return (
      <div>
          <Navbar fixed="top" bg="dark" variant="dark">
        <a href="/">
          <img src="logo.png" alt="text here" />
        </a>
            <Nav className="mr-auto">
              <Nav.Link href='/home'>Home</Nav.Link>
              <Nav.Link href="/destinations">Destinations</Nav.Link>
              <Nav.Link href="/hosts">Hosts</Nav.Link>
              <Nav.Link href="/myAccount">My Account</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="light">Search</Button>
            </Form>
          </Navbar>
      </div>
    );
  }
}

export default Menu;
