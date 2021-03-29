"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fetchNoCors = function fetchNoCors(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var corsAnyWhereInstanceURL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "https://cors-anywhere.herokuapp.com/";
  return new Promise(async function (resolve, reject) {
    try {
      var res = await fetch("" + corsAnyWhereInstanceURL + url, _extends({}, options, {
        headers: _extends({}, options.headers, {
          "X-Requested-With": "XMLHttpRequest"
        })
      }));
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = fetchNoCors;