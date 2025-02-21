import {axi} from './axiosSetup';

import {User} from '@/types';

export const getCurrentUser = async (): Promise<User> => {
  const response = await axi.get<{
    employeecode: string;
    fullname: string;
    workemail: string;
    phone: string;
  }>('/api/me');

  const {employeecode, fullname, workemail, phone} = response.data;

  return {
    code: employeecode,
    fullName: fullname,
    email: workemail,
    phone,
  };
};
