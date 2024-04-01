// reducers/userReducer.js

const GET_USERPROFILE = "GET_USERPROFILE"
const LOGOUT = "LOGOUT"

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
            };
            case LOGOUT:
                return {
                    ...state,
                    userData: {}, 
                };
                default:
                    return state;
            }
        };
export default userReducer;