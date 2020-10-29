import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/nav_b';
import add_ben from './components/add_ben';
import remove_b from './components/remove_b';
import instant_p from './components/instant_p';
import schedule from './components/schedule';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path ="/add_ben" component = {add_ben}/>
          <Route path ="/remove_b" component = {remove_b}/ >
          <Route path ="/instant_p" component = {instant_p}/>
          <Route path ="/schedule" component = {schedule}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
