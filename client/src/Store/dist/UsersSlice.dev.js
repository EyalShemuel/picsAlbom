"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addUser = exports.userSelectors = exports.userAdapter = void 0;

var _toolkit = require("@reduxjs/toolkit");

var userAdapter = (0, _toolkit.createEntityAdapter)();
exports.userAdapter = userAdapter;
var userSelectors = userAdapter.getSelectors(function (state) {
  return state.Users;
});
exports.userSelectors = userSelectors;
var userSlice = (0, _toolkit.createSlice)({
  name: 'users',
  initialState: userAdapter.getInitialState({}),
  reducers: {
    addUser: userAdapter.addOne
  }
});
var addUser = userSlice.actions.addUser;
exports.addUser = addUser;
var _default = userSlice.reducer;
exports["default"] = _default;