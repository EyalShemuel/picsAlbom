"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.removeUser = exports.addUser = exports.userSelectors = exports.userAdapter = void 0;

var _toolkit = require("@reduxjs/toolkit");

var userAdapter = (0, _toolkit.createEntityAdapter)();
exports.userAdapter = userAdapter;
var userSelectors = userAdapter.getSelectors(function (state) {
  return state.users;
});
exports.userSelectors = userSelectors;
var userSlice = (0, _toolkit.createSlice)({
  name: 'users',
  initialState: userAdapter.getInitialState({}),
  reducers: {
    addUser: userAdapter.addOne,
    removeUser: userAdapter.removeOne
  }
});
var _userSlice$actions = userSlice.actions,
    addUser = _userSlice$actions.addUser,
    removeUser = _userSlice$actions.removeUser;
exports.removeUser = removeUser;
exports.addUser = addUser;
var _default = userSlice.reducer;
exports["default"] = _default;