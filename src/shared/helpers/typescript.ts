import {stringify} from '../utils';

export const catchUnknownValue = (_value: never): never => {
  throw new Error(`unknown value: ${stringify(_value)}`);
};
