const fetchNoCors = (url, options = {}, corsAnyWhereInstanceURL = "https://cors-anywhere.herokuapp.com/") =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(`${corsAnyWhereInstanceURL}${url}`, {
        ...options,
        headers: {
          ...options.headers,
          "X-Requested-With": "XMLHttpRequest",
        } 
      });
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });

  module.exports = fetchNoCors;
