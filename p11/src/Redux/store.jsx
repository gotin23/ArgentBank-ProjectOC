import { configureStore } from "@reduxjs/toolkit";
// import UserReducer from "./Reducers/UserReducer";
import SignInReducer from "./Reducers/SignInReducer";
import ProfileUserReducer from "./Reducers/ProfileUserReducer";

const store = configureStore({
  reducer: {
    // user: UserReducer,
    signIn: SignInReducer,
    profile: ProfileUserReducer,
    // Autres reducers...
  },
});

export default store;
