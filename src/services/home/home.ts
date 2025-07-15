import {handleApiResponse} from '../../utilities/Utils';
import {homeDetailInstance, homeListInstance} from './instance';

export const getUserList = async (listID: string) => {
  return handleApiResponse(homeListInstance.get(`user/list?skip=10&limit=10`));
};
export const getUserDetails = async (listID: string) => {
  return handleApiResponse(homeDetailInstance.get(`user/14`));
};
