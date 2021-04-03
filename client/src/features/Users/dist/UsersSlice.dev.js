"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addUser = exports.userSlice = exports.userSelectors = exports.userAdapter = void 0;

var _toolkit = require("@reduxjs/toolkit");

var userAdapter = (0, _toolkit.createEntityAdapter)();
exports.userAdapter = userAdapter;
var userSelectors = userAdapter.getSelectors(function (state) {
  return state.Users;
});
exports.userSelectors = userSelectors;
var userSlice = (0, _toolkit.createSlice)({
  name: 'users',
  initialState: userAdapter.getInitialState(),
  reducers: {
    addUser: userAdapter.addOne
  }
});
exports.userSlice = userSlice;
var addUser = userSlice.actions.addUser;
/*  tasks.map((task) =>
        task.id === id ? { ...task, remainder: !task.remainder } : task
      ) */
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

/* export const selectCount = state => state.counter.value; */

exports.addUser = addUser;
var _default = userSlice.reducer;
exports["default"] = _default;