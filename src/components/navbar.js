import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavBar extends Component{
	render(){
		return(
			<Navbar inverse>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">Elogo</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			        <NavItem eventKey={1} href="#">Link</NavItem>
			        <NavItem eventKey={2} href="#">Link</NavItem>
			      </Nav>
			      <Nav pullRight>
			        <NavItem eventKey={1} href="#">Link</NavItem>
			        <NavItem eventKey={2} href="#">Link</NavItem>
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
		);
	}
}

export default NavBar;