import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../css/footer.css';


export default class footer extends Component {
  render(){
    return(
      <footer inverse pullLeft>
      <div className ="f_left">
      <p>SunBank&trade; 2018</p>
      </div>
      <div className = "f_right">
      <p pullRight> MatiLand </p>
      </div>
      </footer>
    )
  }
}
