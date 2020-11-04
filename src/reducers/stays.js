const initialState = []
const stays = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_STAYS_SUCCESS":
            return [...action.stays]
        // case "SHOW_STAY": 
        //     return action.stay
        default:
            return state
    }
}
export default stays