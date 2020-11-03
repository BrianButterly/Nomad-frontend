const initialState = []
const destinations = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_DESTINATIONS_SUCCESS":
            return [...action.destinations]
        case "SHOW_DESTINATION": 
            return action.destination
        default:
            return state
    }
}
export default destinations