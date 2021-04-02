import { createSlice } from '@reduxjs/toolkit';

// a different way to create reducer???
export const userSlice = createSlice({
  // reducer name
  name: 'user',
  // set initial state
  initialState: {
    user: null,
  },
  // reducer
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// the function arg for useSelector
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
