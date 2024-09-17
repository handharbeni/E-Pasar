const axios = require('axios');
// const sBaseUrl = 'http://172.20.10.3:2054/';
const sBaseUrl = 'http://192.168.100.206:20603/';

const instance = axios.create({
    baseURL: sBaseUrl,
    proxy: false,
    timeout: 3000000
});

instance.interceptors.request.use(request => {
  // console.log('Starting Request', request)
  return request
})
instance.interceptors.response.use(response => {
  // console.log('Response:', response)
  return response
})
module.exports = instance
