export const fetchUserSuccess = (user) => {
    return {
        type: 'FETCH_USER_SUCCESS', 
        user: user
    }
}

// export const createUserSuccess = (user) => {
//     return {
//         type: 'CREATE_USER_SUCCESS', 
//         user: user
//     }
// }