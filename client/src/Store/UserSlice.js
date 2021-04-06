import { createSlice,createEntityAdapter } from '@reduxjs/toolkit';

export const userAdapter = createEntityAdapter();
export  const userSelectors = userAdapter.getSelectors(state => state.users)


 const userSlice = createSlice({
  name: 'users',
  initialState: userAdapter.getInitialState({}),
  reducers: {
    addUser: userAdapter.addOne,
    removeUser: userAdapter.removeOne,
  },
});

export const { addUser , removeUser} = userSlice.actions;



export default userSlice.reducer;
