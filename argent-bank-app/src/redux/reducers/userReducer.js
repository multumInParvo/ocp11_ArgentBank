// reducers/userReducer.js

const GET_USERPROFILE = "GET_USERPROFILE"
const LOGOUT = "LOGOUT"
const EDIT_USERNAME = "EDIT_USERNAME"

const initialState = {
    status: 'VOID',
    userData: {},
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state,
                status: 'SUCCEEDED',
                userData: action.payload,
            }
        case EDIT_USERNAME:
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    userName: action.payload
                }
            }
        case LOGOUT:
            return {
                ...state,
                userData: {},
            }
        default:
            return state;
    }
}
