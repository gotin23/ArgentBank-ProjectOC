import { configureStore } from "@reduxjs/toolkit";
import SignInReducer from "./Reducers/SignInReducer";
import ProfileUserReducer from "./Reducers/ProfileUserReducer";

const store = configureStore({
  reducer: {
    signIn: SignInReducer,
    profile: ProfileUserReducer,
  },
});

export default store;
