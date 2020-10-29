import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../css/schedule.css';


export default class schedule extends Component {
  render(){
    return(
      <Grid>
        <Jumbotron>
          <h2>Schedule payments</h2>
          <p>You can schedule routine payments to a beneficiary</p>

          <input type="radio" name="r-p" /> Make this a recurring payment?
          <p />

          <p>Payment Date:</p>
          <input type="date" name="account_num" />
          <p>Amount:</p>
          <input type="number" name="amount" />



        </Jumbotron>
        <Link to="/">
          <Button bsStyle = "primary"> Accept </Button>
        </Link>
      </Grid>
    )
  }
}
