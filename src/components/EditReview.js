import React from 'react'
import { connect } from 'react-redux'
import editReviewSuccess from '../actions/reviews'

class EditReview extends React.Component{

    state = {
        title: '',
        body: '',
        user_id: 42,
        id: ""
    }

    componentDidMount(){
        const {title, body, id} = this.props.review
        this.setState({
            title,
            body, 
            user_id: 42,
            id 
        }) 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const reqObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        fetch(`http://localhost:3000/reviews/${this.props.review.id}`, reqObj)
            .then(resp => resp.json())
            .then( reviews => {
                this.props.editReviewSuccess(reviews)
                this.props.history.push("/reviews")
            })
    }

    render() {
        return(
            <div>
                <h1 style={{
                    backgroundColor: "#db9833",
                    width: "400px", 
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "center",
                    borderRadius: "5px",
                    marginTop: "150px"}}>Edit Review
                </h1>
                <div textAlign="center">
                    <form onSubmit={this.handleSubmit}>
                        <input name={'title'} onChange={this.handleChange} value={this.state.title} placeholder={'Title'} /><br/>
                        <textarea  name={'body'} onChange={this.handleChange} value={this.state.body} placeholder={'Body'} /><br/>
                        <button className="btn btn-light"type="submit" >Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = {
    editReviewSuccess
}

const mapStateToProps = (state) => {
    return {
        review: state.review
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReview)