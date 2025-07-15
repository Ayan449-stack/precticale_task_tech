import axios from 'axios';
import {handleErrorResponse} from '../errorHandling';

export const loginInstance = axios.create({
  baseURL: `http://3.7.81.243/projects/plie-api/public/api/`,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});

loginInstance.interceptors.request.use(request => {
  console.log('Request Login User :', JSON.stringify(request));
  return request;
});

loginInstance.interceptors.response.use(response => {
  console.log('Response Login User:', JSON.stringify(response));
  return response;
}, handleErrorResponse);
