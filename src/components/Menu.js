import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { logoutSuccess } from '../actions/auth'


class Menu extends React.Component {

  handleLogout = () => {
    localStorage.removeItem('app_token')
    this.props.logoutSuccess()
  }

  render() {
    return (
      <div>
        <Navbar sticky="top" bg="dark" variant="dark" >
        <a href="/home">
          <img src="logo.png" alt="Nomad" />
        </a>
          <Nav className="mr-auto">
            <Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href="/map">Map</Nav.Link>
            <Nav.Link href="/hosts">Hosts</Nav.Link>
            <Nav.Link href="/thingsToDo">Things To Do</Nav.Link>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
            <Nav.Link href="/myAccount">My Account</Nav.Link>
          </Nav>
            <div>
            {
              this.props.auth.id
              ?
              <Link to='/login' className="btn btn-light" onClick={this.handleLogout} >
                Logout
              </Link>
              : 
              <Link>
              </Link>
            }
            </div>
        </Navbar>
            
            
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  logoutSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu)

