# Fetch No CORS

Bypass CORS for browser's Fetch API using https://github.com/Rob--W/cors-anywhere

1. Installation

npm:
```
npm i fetch-no-cors
```

yarn:

```
yarn add fetch-no-cors
```

2. Use

It's exactly like how we use the original `fetch`, you can either use it with await/async:
```
import fetchNoCors from "fetch-no-cors"

// You need to setup your own cors-anywhere proxy instance using https://github.com/Rob--W/cors-anywhere
const CORS_ANYWHERE = "https://my-own-cors-anywhere-proxy.com"
const foo = async (url, options, CORS_ANYWHERE) => {
  const res = await fetchNoCors(url, options)
  console.log(res)
}
```

or:

```
fetchNoCors(url, options, CORS_ANYWHERE)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```