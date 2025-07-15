import axios from 'axios';

export function handleErrorResponse(error: any) {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    switch (status) {
      case 500:
        console.error('Server error - 500: An unexpected error occurred.');
        break;
      case 401:
        console.error(
          'Unauthorized - 401: Access is denied due to invalid credentials.',
        );
        break;
      case 404:
        console.error(
          'Not Found - 404: The requested resource could not be found.',
        );
        break;
      default:
        console.error('An unknown error occurred.', error);
    }
  } else {
    console.error('An error occurred', error);
  }

  return Promise.reject(error);
}
