// reducers/authReducer.js

const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAIL = "LOGIN_FAIL"
const LOGOUT = "LOGOUT"

const initialState = {
    status: "VOID",
    isAuthenticated: false,
    token: null,
    error: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: "SUCCEEDED",
                isAuthenticated: true,
                token: action.payload,
                error: null
            }
        
        case LOGIN_FAIL: {
            return {
                ...state,
                status: "FAILED",
                isAuthenticated: false,
                error: action.payload
            }
        }  

        case LOGOUT: {
            return initialState;
        }  
 
        default:
            return state;
    }
}