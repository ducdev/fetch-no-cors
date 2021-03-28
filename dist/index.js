"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fetchNoCors = function fetchNoCors(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(async function (resolve, reject) {
    try {
      var CORS_EVERYWHERE = "https://cors-anywhere.herokuapp.com/"; // cors-everywhere to bypass cors policy of browsers
      var res = await fetch("" + CORS_EVERYWHERE + url, _extends({}, options, {
        headers: _extends({}, options.headers, {
          "X-Requested-With": "XMLHttpRequest" // required header for cors-everywhere
        })
      }));
      var data = await res.text();
      if (res.status === 403) {
        // https://github.com/Rob--W/cors-anywhere/issues/301
        var matched = data.match(/name="accessRequest".value="(.*)"><\/form>/);
        var corsDemoToken = matched[1];
        fetch(CORS_EVERYWHERE + "corsdemo?accessRequest=" + corsDemoToken, {
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          body: "accessRequest=" + corsDemoToken
        });
        resolve(fetchNoCors(url));
      } else {
        resolve(res);
      }
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = fetchNoCors;