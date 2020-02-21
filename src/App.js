import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
// import Home from './components/Home';


class Quote_App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="Quote_App">
        <Navbar />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />

      </div>
      </BrowserRouter>
    );
  }
  
}

export default Quote_App;
