import { createSlice,createEntityAdapter } from '@reduxjs/toolkit';

export const userAdapter = createEntityAdapter();
export  const userSelectors = userAdapter.getSelectors(state => state.Users)

export const userSlice = createSlice({
  name: 'users',
  initialState: userAdapter.getInitialState(),
  reducers: {
    addUser: userAdapter.addOne,
    
    
  },
});

export const { addUser } = userSlice.actions;

/*  tasks.map((task) =>
        task.id === id ? { ...task, remainder: !task.remainder } : task
      ) */

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
/* export const selectCount = state => state.counter.value; */

export default userSlice.reducer;
