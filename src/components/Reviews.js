import React from 'react';
import { connect } from 'react-redux'
import { fetchReviewsSuccess } from '../actions/reviews'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class Reviews extends React.Component {

    componentDidMount(){
        fetch('http://localhost:3000/reviews')
        .then(resp => resp.json())
        .then(reviews => {
            this.props.fetchReviewsSuccess(reviews)
        })
    }
    
    render() {
        const { reviews } = this.props;
        return (
            <div>
                <a href="/NewReview"><Button variant="light" >Write Review</Button></a><br/>

                {reviews.map(review => (
                    <Link to={{pathname: `/reviews/${review.id}`, state: {review: review}}} style={{color: "black"}}>
                        <div class="grid-item" style={{color: "black"}}>
                            <div key={review.id}>
                                <h3>{review.title}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews
    }
}

const mapDispatchToProps = {
    fetchReviewsSuccess    
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)