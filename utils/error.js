'use strict';

exports.RailtimeException = function(msg, code) {
  return new exports.Exception(msg, 'RailtimeException', code);
};

exports.UnknownException = function(msg, code) {
  return new exports.Exception(msg, undefined, code);
};

exports.StationNotFoundException = function() {
  return new exports.Exception('Could not find station', 'StationNotFoundException', 404);
};

exports.Exception = function(msg, type, code) {
  return {
    'error' : {
      'code'    : code,
      'message' : msg,
      'type'    : type || 'UnknownException',
    }
  };
};