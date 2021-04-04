import { configureStore } from "@reduxjs/toolkit";
import userReducer, { userAdapter } from "./UserSlice";
import imageReducer, { imagesAdapter } from "./ImageSlice";

export default configureStore({
  reducer: { users: userReducer, images: imageReducer },
});
