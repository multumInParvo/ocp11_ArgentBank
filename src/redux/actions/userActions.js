// userActions.js

const GET_USERPROFILE = 'GET_USERPROFILE';
const EDIT_USERNAME = 'EDIT_USERNAME'; 

export const userProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    }
}

export const updateUsername = (userName) => {
    return {
        type: EDIT_USERNAME,
        payload: userName,
    }
}
