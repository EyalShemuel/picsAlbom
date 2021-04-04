"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addImage = exports.imageSelectors = exports.imageAdapter = void 0;

var _toolkit = require("@reduxjs/toolkit");

var imageAdapter = (0, _toolkit.createEntityAdapter)();
exports.imageAdapter = imageAdapter;
var imageSelectors = imageAdapter.getSelectors(function (state) {
  return state.images;
});
exports.imageSelectors = imageSelectors;
var ImageSlice = (0, _toolkit.createSlice)({
  name: 'Images',
  initialState: imageAdapter.getInitialState({}),
  reducers: {
    addImage: imageAdapter.addOne
  }
});
var addImage = ImageSlice.actions.addImage;
exports.addImage = addImage;
var _default = ImageSlice.reducer;
exports["default"] = _default;