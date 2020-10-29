import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../css/instant_p.css';


export default class instant_p extends Component {
  render(){
    return(
      <Grid>
        <Jumbotron>
          <h2>Instant payments</h2>
          <p>Here you can make instant payments.</p>

          <p> Select from which account should the payment be made.</p>

          <p> Select account: </p>
            <select>
              <option value = "Select">Select</option>
              <option value="Beneficiary">Savings</option>
              <option value="Beneficiary">Cheque</option>
              <option value="Beneficiary">Credit</option>
              <option value="Beneficiary">Investment</option>
            </select>
          <br/>
          <br/>

          <p> Enter Receipient Name: </p>
          <input ref = 'receipient_name' type="text" placeholder="John Doe"/>
          <br/>

          <div className = "pay_to">
            <p>Select payment to:</p>

            <div id = "pay_to_acc">
              <input ref = 'pay_acc' type="radio" placeholder="Account Number" /> Account Number
              <input ref = 'pay_acc_num' type="text" placeholder="5466563216540021"/>
            </div>

            <br />

            <div id = "pay_to_cr">
              <input ref = 'pay_cred' type="radio" placeholder="Credit Card" /> Credit Card
              <input ref = 'pay_cred_num' type="text" placeholder="556543132"/>
            </div>

            <br />

            <div id = "pay_to_mob">
              <input ref = 'pay_mob' type="radio" placeholder="Mobile Number" /> Mobile Number
              <input ref = 'pay_mob_num' type="text" placeholder="0123456789"/>
            </div>
            <p />
          </div>


          <p>Specify amount: </p>
          <input ref = 'insta_amount'  type="text" placeholder="R000'"/>


          <p>Enter a Reference: </p>
          <input ref = 'insta_ref' type="text" placeholder="Payment"/>
          <p />
          <Button>Make Instant Payment</Button>

        </Jumbotron>
      </Grid>
    )
  }
}
