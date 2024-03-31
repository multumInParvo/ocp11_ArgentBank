// userActions.js

const GET_USERPROFILE = 'GET_USERPROFILE';

export const userProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    }
}
