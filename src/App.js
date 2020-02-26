import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
// import Home from './components/Home';
import AddQuote from './AddQuote';
import Quotes from './components/Quotes';

class Quote_App extends Component {
  state = {
    quotes : [
      {title: 'Getting started', author: 'Nelson Mandela', citetext: 'The way to get started is to quit talking and start doing.', id: 1},
      {title: 'Light and dark', author: 'Aristotle', citetext: 'It is during our darkest moments that we must focus to see the light.', id: 2},
      {title: 'The best and most beautiful things', author: 'Helen Keller', citetext: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.', id: 3},
      {title: 'Defeats', author: 'Maya Angelou', citetext: 'You will face many defeats in life, but never let yourself be defeated.', id: 4},
      {title: 'What life is', author: 'Helen Keller', citetext: 'Life is either a daring adventure or nothing at all.', id: 5}
    ]
  }
  addQuote = (quote) => {
    quote.id = Math.random();
    let quotes = [...this.state.quotes, quote]
    this.setState({
      quotes: quotes
    })
  }
  deleteQuote = (id) => {
    let quotes = this.state.quotes.filter(quote => {
      return quote.id !== id
    });
    this.setState({
      quotes: quotes
    })
  }
  render(){
    return (
      <BrowserRouter>
      <div className="Quote_App">
        <Navbar />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Quotes deleteQuote={this.deleteQuote} quotes={this.state.quotes} />
        <AddQuote addQuote={this.addQuote} />
      </div>
      </BrowserRouter>
    );
  }
}
export default Quote_App