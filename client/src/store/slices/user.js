import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: {},
  loading: false,
  err: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
      state.loading = true;
      state.err = false;
    },
  },
});

export const { getUser } = userSlice.actions

export default userSlice.reducer