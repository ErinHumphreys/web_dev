import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../css/add_ben.css';


export default class add_ben extends Component {
  render(){
    return(
      <Grid>
        <Jumbotron>
          <h2>Beneficiary Profile</h2>
          <p>Here you can enter the details of a Beneficiary.
            Schedule payments to the Beneficiary and also remove the a
            Beneficiary if needed.
          </p>
          <p>Select Beneficiary type:</p>
          <input ref = 'ben_pri' type="radio" name="Receipient" /> Primary
          <input ref = 'ben_sec' type="radio" name="Receipient" /> Contigent
          <p />


          <p> Name: </p>
          <input ref= 'first_name' type="text" placeholder='First Name'/>
          <p> Surname: </p>
          <input ref= 'last_name' type="text" placeholder='Surname'/>

          <p> Account type: </p>
            <select>
              <option value = "Select">Select</option>
              <option value="Beneficiary">Savings</option>
              <option value="Beneficiary">Cheque</option>
              <option value="Beneficiary">Savings and Current</option>
              <option value="Beneficiary">Cheque and current</option>
              <option value="Beneficiary">Investment</option>
            </select>
            <p />

            <p>* My Statement Description (DR)</p>
            <input type="text" name="Statement_dr" />
            <p>** Beneficiary Statement Description (CR)</p>
            <input type="text" name="Statement_cr" />
            <p>Payment Notification</p>
            <select>
            <option value="Select">None</option>
            <option value="Notification">SMS</option>
            <option value="Notification">E-mail</option>
            <option value="Notification">Post</option>
            <option value="Notification">Pigeon</option>
          </select>



            <p>Branch code: </p><input ref = 'code_branch' type="text" placeholder = 'eg. 1101212'/>
            <p>Account number: </p><input ref = 'acc_num' type="text" placeholder = 'e.g 55642138422'/>
            <p>Contact Number: </p><input ref = 'num_contact' type="text" placeholder = '0123456789'/>

            <p />

            <Link to="/add_ben">
              <Button bsStyle = "primary"> Accept beneficiary details</Button>
            </Link>
            <Link to="/remove_b">
              <Button bsStyle = "primary"> Remove Beneficiary</Button>
            </Link>

        </Jumbotron>
        <p />

        <Jumbotron>

        <h2>Schedule payments</h2>
        <p>You can schedule routine payments to a beneficiary</p>

        <input ref = 'recur_radio' type="radio" name="r-p" /> Make this a recurring payment?
        <p />

        <p>Payment Date:</p>
        <input ref = 'pay_date' type="date" name="account_num" />
        <p>Amount:</p>
        <input ref = 'pay_date ' type="number" name="amount" />
        <p />
        <Button bsStyle = "secondary"> Accept </Button>
        </Jumbotron>
      </Grid>
    )
  }
}
