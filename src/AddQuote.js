import React, { Component } from "react";

class AddQuote extends Component {
    state = {
        title: null,
        author: null,
        citetext: null,
    }
}

handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
}

handleSubmit = (e) => {
    e.prevent.default();
    this.props.addQuote(this.state);
    this.setState({
        content: ''
    })
}

render(); {
    return(
        <div>
            <form onSubmit ={this.handleSubmit}>
                <label>Add new quote:</label>
                <input type="text" onChange={this.handleChange} value={this.state.content} />
            </form>
        </div>
    )
}

export default AddQuote