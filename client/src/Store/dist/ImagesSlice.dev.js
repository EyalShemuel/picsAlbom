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
var ImagesSlice = (0, _toolkit.createSlice)({
  name: 'Images',
  initialState: imageAdapter.getInitialState({}),
  reducers: {
    addImage: imageAdapter.addOne
  }
});
var addImage = ImagesSlice.actions.addImage;
exports.addImage = addImage;
var _default = ImagesSlice.reducer;
exports["default"] = _default;