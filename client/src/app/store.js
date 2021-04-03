import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '../features/Users/UsersSlice';
/* import imagesReducer from '../features/Users/UsersSlice'; */

export default configureStore({
  reducer: {
    users: usersReducer,
   /*  images: imagesReducer */
    
  },
 
}

);
