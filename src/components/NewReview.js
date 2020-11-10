import React from 'react'
import { connect } from 'react-redux'
import { createReview } from '../actions/reviews'

class NewReview extends React.Component{

    state = {
        title: '',
        body: '',
        user_id: 42
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const reqObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        fetch('http://localhost:3000/reviews', reqObj)
            .then(resp => resp.json())
            .then( reviews => {
            this.props.history.push("/reviews")
            })
    }
    
    render() {
        return(
            <div>
                <h1 style={{backgroundColor: "#e9c46a",
                    width: "400px", 
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "center",
                    borderRadius: "5px",
                    marginTop: "100px"}}>New Review
                </h1>
                <div textAlign="center">
                    <form onSubmit={this.handleSubmit}>
                        <input name={'title'} onChange={this.handleChange} value={this.state.title} placeholder={'Title'} /><br/>
                        <textArea  name={'body'} onChange={this.handleChange} value={this.state.body} placeholder={'Body'} /><br/>
                        <button className="btn btn-light"type="submit" >Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    createReview 
}

export default connect(null, mapDispatchToProps)(NewReview)