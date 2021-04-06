import { configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line
import userReducer, { userAdapter } from "./UserSlice";
// eslint-disable-next-line
import imageReducer, { imagesAdapter } from "./ImageSlice";

export default configureStore({
  reducer: { users: userReducer, images: imageReducer },
});
