
const initialState = []

const review = (state=initialState, action) => {
    switch(action.type) {
        case "SHOW_REVIEW": 
            return action.review
        case "DELETE_REVIEW":
            return []
        case "EDIT_REVIEW_SUCCESS":
            return action.review    
        default:
            return state    
    }
}

export default review