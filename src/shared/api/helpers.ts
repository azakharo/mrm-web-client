import {isValid, parseISO} from 'date-fns';
import isEmpty from 'lodash/isEmpty';

// if invalid input, returns "0 date"
export const getDateFromIsoString = (
  dateTimeIsoString: string | null | undefined,
): Date => {
  const nullDate = new Date(0);

  if (isEmpty(dateTimeIsoString)) {
    return nullDate;
  }

  const dt = parseISO(dateTimeIsoString as string);
  if (!isValid(dt)) {
    return nullDate;
  }

  return dt;
};
