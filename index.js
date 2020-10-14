const axios = require('axios')

const API_URL = 'https://api.github.com'

/**
 * Extract data from a user from the github api
 * @example
 * user = 'damenor'
 * @param { string } user User from which we want to extract information
 */
const getUser = user => {
  const url = `${API_URL}/users/${user}`
  return axios.get(url)
    .then(res => res.data)
    .catch(error => console.log(error))
}

module.exports = {
  getUser
}
