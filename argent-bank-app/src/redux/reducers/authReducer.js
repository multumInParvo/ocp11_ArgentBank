// reducers/authReducer.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
  },

  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null; 
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null; 
    },
    loginFailed(state, action) {
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;