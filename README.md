# proyect-1b-api-github

Module to get data from a user from the github api

## Install

```
npm proyect-1b-api-github
```

## Use

```js

// Get data from a user from the github api
const { getUser } = require('proyect-1b-api-github')

const userName = 'damenor'

getUser(userName)
  .then(data => console.log(data))
  .catch(error => console.error(error))

```
