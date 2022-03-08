import { createReducer } from "@reduxjs/toolkit";
import { signIn } from "../actions/userActions";

const initialState = {
  isLoading: false,
  error: null,
  userInfo: null,
};

export const loginReducer = createReducer(initialState, (builder) => {
  builder.addCase(signIn.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(signIn.fulfilled, (state, action) => {
    state.isLoading = false;
    state.userInfo = action.payload;
  });
  builder.addCase(signIn.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });
});
