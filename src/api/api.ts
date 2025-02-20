import {axi} from './axiosSetup';

export const getCurrentUser = async (): Promise<{
  code: string;
  fullName: string;
  email: string;
  phone: string;
}> => {
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
