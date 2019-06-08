import axios from 'axios';

const baseDomain = process.env.VUE_APP_API_ENDPOINT;

const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
});
