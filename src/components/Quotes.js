import React from 'react';

const Quotes = ({ quotes, deleteQuote }) => {
    const quoteList = quotes.length ? (quotes.map(quotes => {
        return (
            <div classname="quote" key={quotes.id}>
                <div>Title: {quotes.title}</div>
                <div>Author: {quotes.author}</div>
                <div>Citetext: {quotes.citetext}</div>
                <button onClick={() => { deleteQuote(quotes.id) }}>Delete quote</button>
            </div>)
    })) : (<h1>No quotes to be shown</h1>)
    return (
        <div className="quote-list">
            {quoteList}
        </div>
    )
}

export default Quotes