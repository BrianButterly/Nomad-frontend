import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

class Menu extends React.Component {

  render() {
    return (
      <div>
        <Navbar sticky="top" bg="dark" variant="dark" >
        <a href="/">
          <img src="logo.png" alt="Nomad" />
        </a>
          <Nav className="mr-auto">
            <Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href="/destinations">Destinations</Nav.Link>
            <Nav.Link href="/hosts">Hosts</Nav.Link>
            <Nav.Link href="/myAccount">My Account</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
