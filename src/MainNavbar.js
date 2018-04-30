import React, { Component } from 'react';
import logo2 from './images/logo2.png';
import './css/App.css';
import './themify-icons/themify-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/MainNavbar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, 
    Container,
    Row,
    Col,
  } from 'reactstrap';

class MainNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return ( 
    <div className="megavideo-nav">
       <Container>
         <Navbar color="faded" light expand="md">
                <NavbarBrand href="/"> <img src={ logo2 }/> </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem className="navitem-active">
                      <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/"><i className="ti-search"></i></NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
         </Navbar>
        </Container>
    </div>
  
    );
  }
}

export default MainNavbar;
