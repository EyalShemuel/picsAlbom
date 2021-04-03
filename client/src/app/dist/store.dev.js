"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _UsersSlice = _interopRequireDefault(require("../features/Users/UsersSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* import imagesReducer from '../features/Users/UsersSlice'; */
var _default = (0, _toolkit.configureStore)({
  reducer: {
    users: _UsersSlice["default"]
    /*  images: imagesReducer */

  }
});

exports["default"] = _default;