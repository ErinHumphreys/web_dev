import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/nav_b.css'



export default class nav_b extends Component {
  render(){
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand"><span class="glyphicon glyphicon-"></span>SunBank</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} title=" Personal" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>View Account</MenuItem>

              <NavDropdown eventKey={2} title=" Beneficiary" id="basic-nav-dropdown">
                <MenuItem href = "/add_ben" eventKey={2.1}>Add Beneficiary</MenuItem>
                <MenuItem href ="/remove_b" eventKey={2.2}>Remove Beneficiary</MenuItem>
              </NavDropdown>

              <NavDropdown eventKey={3} title=" Payments" id="basic-nav-dropdown">
              <MenuItem href = "/instant_p" eventKey={3.1}>Instant Payments</MenuItem>
              <MenuItem href = "/schedule" eventKey={3.2}>Schedule Payments</MenuItem>
              </NavDropdown>

              <MenuItem eventKey={4}>Utilities</MenuItem>

            </NavDropdown>

            <NavDropdown eventKey={5} title=" Private" id ="basic-nav-dropdown">
            <MenuItem eventKey={5.1}>View Account</MenuItem>

            <NavDropdown eventKey={6} title=" Beneficiary" id="basic-nav-dropdown">
              <MenuItem href = "/add_ben" eventKey={6.1}>Add Beneficiary</MenuItem>
              <MenuItem href ="/remove_b" eventKey={6.2}>Remove Beneficiary</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={7} title=" Payments" id="basic-nav-dropdown">
            <MenuItem href = "/instant_p" eventKey={7.1}>Instant Payments</MenuItem>
            <MenuItem href = "/schedule" eventKey={7.2}>Schedule Payments</MenuItem>
            </NavDropdown>

            <MenuItem eventKey={8}>Utilities</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={9} title=" Business " id ="basic-nav-dropdown">
            <MenuItem eventKey={9.1}>View Account</MenuItem>

            <NavDropdown eventKey={10} title=" Beneficiary" id="basic-nav-dropdown">
              <MenuItem href = "/add_ben" eventKey={10.1}>Add Beneficiary</MenuItem>
              <MenuItem href ="/remove_b" eventKey={10.2}>Remove Beneficiary</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={11} title=" Payments" id="basic-nav-dropdown">
            <MenuItem href = "/instant_p" eventKey={11.1}>Instant Payments</MenuItem>
            <MenuItem href = "/schedule" eventKey={11.2}>Schedule Payments</MenuItem>
            </NavDropdown>

            <MenuItem eventKey={12}>Utilities</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={13.1}>Start my Business</MenuItem>
              <MenuItem eventKey={13.2}>International Business</MenuItem>
            </NavDropdown>

            <NavItem eventKey={14} href="#">
              Contact us
            </NavItem>
            <NavItem eventKey={15} href="#">
              Settings
            </NavItem>

          </Nav>
          <Nav pullRight>
            <NavItem ref = 'signup' eventKey={16} href="#"> <span class="glyphicon glyphicon-user"></span>
              Sign Up
            </NavItem>
            <NavItem ref = 'logout' eventKey={17} href="#" > <span class="glyphicon glyphicon-log-in"> </span>
              Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
