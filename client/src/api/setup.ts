import axios from 'axios';

const HEADERS = {
  'Content-Type': 'application/json',
};

// const host = process.env.REACT_APP_API_HOST
//   ? process.env.REACT_APP_API_HOST
//   : "";

const host = 'localhost:3000';

const requestSettings = {
  baseURL: `${host}/api`,
  headers: HEADERS,
};

export const http = axios.create(requestSettings);
