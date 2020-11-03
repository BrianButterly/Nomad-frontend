export const fetchHostsSuccess = (hosts) => {
    return {
        type: 'FETCH_HOSTS_SUCCESS', 
        hosts: hosts
    }
}

const showHost = (host) => {
    return {
        type: "SHOW_HOST",
        host: host
    }
}

export default showHost