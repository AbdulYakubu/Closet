"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getError = void 0;

var getError = function getError(error) {
  return error.response && error.response.data.message ? error.response.data.message : error.message;
};

exports.getError = getError;