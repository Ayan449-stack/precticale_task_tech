import {handleApiResponse} from '../../utilities/Utils';
import {loginInstance} from './instance';

interface LoginParams {
  email?: string;
  password: string;
}

export const callLoginAPI = async (params: LoginParams) => {
  return handleApiResponse(loginInstance.post('login', params, {}));
};
