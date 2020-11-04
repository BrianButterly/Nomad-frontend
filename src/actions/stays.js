export const fetchStaysSuccess = (stays) => {
    return {
        type: 'FETCH_STAYS_SUCCESS', 
        stays: stays
    }
}

const showStay = (stay) => {
    return {
        type: "SHOW_STAY",
        stay: stay
    }
}

export default showStay