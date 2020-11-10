export const fetchReviewsSuccess = (reviews) => {
    return {
        type: 'FETCH_REVIEWS_SUCCESS', 
        reviews: reviews
    }
}

const showReview = (review) => {
    return {
        type: "SHOW_REVIEW",
        review: review
    }
}

export const createReview = (review) => {
    return {
        type: 'CREATE_REVIEW',
        review: review
    }
}

export const deleteReview = () => {
    return {
        type: "DELETE_REVIEW",
    }
}

export const editReviewSuccess = (greatSuccess) => {
    return {
        type: "EDIT_REVIEW_SUCCESS", 
        review: greatSuccess
    }
}

export default showReview