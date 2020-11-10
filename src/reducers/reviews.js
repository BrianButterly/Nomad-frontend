const initialState = []
const reviews = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_REVIEWS_SUCCESS":
            return [...action.reviews]
        case "CREATE_REVIEW": 
            return [...state, action.review]
        default:
            return state
    }
}


export default reviews