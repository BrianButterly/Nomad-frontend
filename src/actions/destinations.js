export const fetchDestinationsSuccess = (destinations) => {
    return {
        type: 'FETCH_DESTINATIONS_SUCCESS', 
        destinations: destinations
    }
}

const showDestination = (destination) => {
    return {
        type: "SHOW_DESTINATION",
        destination: destination
    }
}

export default showDestination