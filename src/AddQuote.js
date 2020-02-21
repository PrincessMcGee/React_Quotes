import React, { Component } from "react";

class AddQuote extends Component {
    state = {
        title: null,
        author: null,
        citetext: null,
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addQuote(this.state);
        this.setState({
            title: '',
            author: '',
            citetext: '',
        })
    }
    
    render() {
        return(
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" onChange={this.handleChange} value={this.state.author}/>
                    <label htmlFor="citetext">Citetext</label>
                    <input type="text" id="citetext" onChange={this.handleChange} value={this.state.citetext}/>
                </form>
            </div>
        )
    }
}



export default AddQuote