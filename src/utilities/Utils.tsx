import axios, {AxiosResponse} from 'axios';
import Snackbar from 'react-native-snackbar';
import {COLORS} from '../constants/Colors';

export const isEmpty = (data: any) => {
  if (
    data !== null &&
    data !== '' &&
    data !== undefined &&
    data !== 'undefined' &&
    data !== 'undefined.00' &&
    data !== 'null' &&
    data !== 'NaN'
  ) {
    return false;
  }
  return true;
};

export const isObjectEmpty = (obj: any) => {
  if (obj !== undefined) {
    return Object.keys(obj).length === 0;
  } else {
    return true;
  }
};

interface ApiError {
  status: number;
  data: any;
}
export const fireSnackBar = (message: string): void => {
  setTimeout(() => {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: COLORS.primaryLightBlue,
      textColor: COLORS.primaryWhite,
      numberOfLines: 3,
    });
  }, 300);
};
export const handleApiResponse = async <T,>(
  apiCall: Promise<AxiosResponse<T>>,
): Promise<T | null> => {
  try {
    const response = await apiCall;
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      const errorResponse: ApiError = {
        status: error.response.status,
        data: error.response.data,
      };
      if (errorResponse?.status === 500) {
        fireSnackBar('Internal Server Error. Please try again later.');
        return null;
      } else {
        return Promise.reject(errorResponse);
      }
    } else if (axios.isAxiosError(error) && error.request) {
      console.log('API Error Request:', JSON.stringify(error.request, null, 2));
      return Promise.reject(new Error('No response received from server.'));
    } else {
      console.log('API Error Message:', error.message);
      return Promise.reject(new Error(error.message));
    }
  }
};
