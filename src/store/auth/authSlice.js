import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // not-authenticated, authenticated, checking
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    error: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.error = null;
    },
    loggout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.error = payload;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});
export const { login, loggout, checkingCredentials } = authSlice.actions;
