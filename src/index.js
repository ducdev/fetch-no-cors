const fetchNoCors = (url, options = {}) =>
  new Promise(async (resolve, reject) => {
    try {
      const CORS_EVERYWHERE = "https://cors-anywhere.herokuapp.com/"; // cors-everywhere to bypass cors policy of browsers
      const res = await fetch(`${CORS_EVERYWHERE}${url}`, {
        ...options,
        headers: {
          ...options.headers,
          "X-Requested-With": "XMLHttpRequest", // required header for cors-everywhere
        } 
      });
      if (res.status === 403) { // https://github.com/Rob--W/cors-anywhere/issues/301
        const data = await res.text();
        const matched = data.match(
          /name="accessRequest".value="(.*)"><\/form>/
        );
        const corsDemoToken = matched[1];
        fetch(
          `${CORS_EVERYWHERE}corsdemo?accessRequest=${corsDemoToken}`,
          {
            method: "post",
            headers: {
              "Content-Type": "multipart/form-data"
            },
            body: `accessRequest=${corsDemoToken}`
          }
        );
        resolve(fetchNoCors(url));
      } else {
        resolve(res);
      }
    } catch (err) {
      reject(err);
    }
  });

  module.exports = fetchNoCors;
