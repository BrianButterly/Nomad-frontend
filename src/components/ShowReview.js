import React from 'react'
import showReview from '../actions/reviews'
import deleteReview from '../actions/reviews'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class ShowReview extends React.Component {
    
    componentDidMount(){
        fetch(`http://localhost:3000/reviews/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then( review => {
            this.props.showReview(review)
        })
    }

    handleDelete = () => {
        
        fetch(`http://localhost:3000/reviews/${this.props.location.state.review.id}`, {method: "DELETE"})
            .then(resp => resp.json())
            .then( data => {
                this.props.history.push("/reviews")    
            }) 
    }
    
    renderReview = () => {
        const { title, body } = this.props.location.state.review
        const link = `/editReview/${this.props.location.state.review.id}`
        return (
            <div>
                <h3>{title}</h3>
                <h1>{body}</h1>
                <button class="btn btn-light" onClick={this.handleDelete}>Delete</button>
                <p></p>
                <Link to={link}><button class="btn btn-light">Edit</button></Link>
            </div>
        )
    }
    
    render() {
        return (
            <div className="show-card">
               {this.renderReview()} 
           </div>
       )
    }
}

const mapDispatchToProps = {
    showReview,
    deleteReview
}

const mapStateToProps = (state) => {
    return {
        review: state.review 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowReview)
