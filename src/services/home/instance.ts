import axios from 'axios';
import {handleErrorResponse} from '../errorHandling';

export const homeListInstance = axios.create({
  baseURL: ``,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0NzMzMDEzOH0.S1-v3-jIEjX91ULOlTV5yrlVuJU5FpSvoR3u5ZS0JOw',
  },
});

homeListInstance.interceptors.request.use(request => {
  console.log('Request list data :', JSON.stringify(request));
  return request;
});

homeListInstance.interceptors.response.use(response => {
  console.log('Response list data:', JSON.stringify(response));
  return response;
}, handleErrorResponse);

export const homeDetailInstance = axios.create({
  baseURL: ``,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0NzMzMDEzOH0.S1-v3-jIEjX91ULOlTV5yrlVuJU5FpSvoR3u5ZS0JOw',
  },
});

homeDetailInstance.interceptors.request.use(request => {
  console.log('Request details :', JSON.stringify(request));
  return request;
});

homeDetailInstance.interceptors.response.use(response => {
  console.log('Response details:', JSON.stringify(response));
  return response;
}, handleErrorResponse);
