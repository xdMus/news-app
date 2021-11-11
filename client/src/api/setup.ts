import axios from 'axios';

const HEADERS = {
  'Content-Type': 'application/json;charset=utf-8',
};

// const host = process.env.REACT_APP_API_HOST
//   ? process.env.REACT_APP_API_HOST
//   : "";

const host = 'http://localhost:4000';

const requestSettings = {
  baseURL: `${host}/api`,
  headers: HEADERS,
};

export const http = axios.create(requestSettings);
