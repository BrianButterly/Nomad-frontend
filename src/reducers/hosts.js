const initialState = []
const hosts = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_HOSTS_SUCCESS":
            return [...action.hosts]
        case "SHOW_HOST": 
            return action.host
        default:
            return state
    }
}
export default hosts