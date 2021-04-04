import { createSlice,createEntityAdapter } from '@reduxjs/toolkit';

export const userAdapter = createEntityAdapter();
export  const userSelectors = userAdapter.getSelectors(state => state.users)


 const userSlice = createSlice({
  name: 'users',
  initialState: userAdapter.getInitialState({}),
  reducers: {
    addUser: userAdapter.addOne,
  },
});

export const { addUser } = userSlice.actions;



export default userSlice.reducer;
