import {User} from '@entities/user';
import {axi, getDateFromIsoString} from '@shared/api';

export const getCurrentUser = async (): Promise<User> => {
  const response = await axi.get<{
    employeecode: string;
    fullname: string;
    workemail: string;
    phone: string;
    birthdate: string;
    city: string;
    devision: string;
    gender: string;
    id: number;
    position: string;
  }>('/api/me');

  const {
    id,
    employeecode,
    fullname,
    gender,
    workemail,
    phone,
    birthdate,
    city,
    devision,
    position,
  } = response.data;

  return {
    id,
    code: employeecode,
    name: fullname,
    gender,
    email: workemail,
    phone,
    birthday: getDateFromIsoString(birthdate),
    city,
    division: devision,
    position,
  };
};
