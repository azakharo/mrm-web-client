import {getTaskInventoryCustomFields, getTaskTbpCustomFields} from '../helpers';
import {TaskCustomField} from '../types';
import {TaskTypeSlug} from './backendTypes';

type GetCustomFieldsFunc = (customFields: TaskCustomField[]) => object;

export const taskTypeSlugToGetCustomFieldsFunc: Record<
  TaskTypeSlug,
  GetCustomFieldsFunc
> = {
  [TaskTypeSlug.INVENTORY]: getTaskInventoryCustomFields,
  [TaskTypeSlug.TBP]: getTaskTbpCustomFields,
};
