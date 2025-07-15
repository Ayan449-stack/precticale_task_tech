import axios from 'axios';
import {store} from '../../state/store';
import {handleErrorResponse} from './errorHandling';

export const eventInstance = axios.create({
  baseURL: `http://3.7.81.243/projects/plie-api/public/api/`,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});

eventInstance.interceptors.response.use(response => {
  console.log('Event Response:', JSON.stringify(response));
  return response;
}, handleErrorResponse);

eventInstance.interceptors.request.use(request => {
  const state = store.getState();
  const token = state.userReducer.token;
  console.log('tokentokentokentoken', token);
  if (token) {
    console.log('getTokem');
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});
