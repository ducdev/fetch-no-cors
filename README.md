# Fetch No CORS

Bypass CORS for browser's Fetch API using https://cors-anywhere.herokuapp.com/

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

const foo = async (url, options) => {
  const res = await fetchNoCors(url, options)
  console.log(res)
}
```

or:

```
import fetchNoCors from "fetch-no-cors"

fetchNoCors(url, options)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```