import axios from 'axios';
import {BASE_URL} from './apiService';

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
});

console.log('BASE URLLL', BASE_URL);

axiosInstance.interceptors.request.use(async (request: any) => {
  console.log('Request API :', JSON.stringify(request, null, 2));

  return request;
});

axiosInstance.interceptors.response.use(
  response => {
    console.log('Response API:', JSON.stringify(response, null, 2));
    return response;
  },
  error => {
    console.error('Error Response API:', JSON.stringify(error, null, 2));
    if (error.response) {
      console.error('Server Error Response:', error.response);

      return Promise.resolve(error.response);
    } else if (error.request) {
      console.error('No Response Received:', error.request);
    } else {
      console.error('Request Error:', error.message);
    }
    return Promise.reject(error);
  },
);
