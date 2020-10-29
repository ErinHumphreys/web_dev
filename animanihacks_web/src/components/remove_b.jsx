import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../css/remove_b.css';


export default class remove_b extends Component {
  render(){
    return(
      <Grid>
        <Jumbotron>
          <h2>Removal of Beneficiary</h2>
          <p>Here you can remove an existing Beneficiary.</p>

          <p>Beneficiary List</p>
          <select className = "ben_del" >
            <option value="Select">Select</option>
            <option value="Beneficiary">John Doe</option>
            <option value="Beneficiary">John Doen</option>
            <option value="Beneficiary">John Doem</option>
            <option value="Beneficiary">John Doeh</option>
            <option value="Beneficiary">John Doek</option>
          </select>

          <br/>
          <br/>

          <Button bsStyle = "primary"> Remove Beneficiary </Button>
        </Jumbotron>

        <Link to="/add_ben">
          <Button bsStyle = "primary"> Back </Button>
        </Link>
      </Grid>
    )
  }
}
