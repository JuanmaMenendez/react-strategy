import axios from 'axios';

// add bug fix A
const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export { api, axios };