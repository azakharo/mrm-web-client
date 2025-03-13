import {isValid, parseISO} from 'date-fns';
import isEmpty from 'lodash/isEmpty';
import trimEnd from 'lodash/trimEnd';

// if invalid input, returns "0 date"
export const getDateFromIsoString = (
  dateTimeIsoString: string | null | undefined,
): Date => {
  const nullDate = new Date(0);

  if (isEmpty(dateTimeIsoString)) {
    return nullDate;
  }

  let normalizedString = dateTimeIsoString!;
  if (!normalizedString.endsWith('Z')) {
    normalizedString += 'Z';
  }

  const dt = parseISO(normalizedString);
  if (!isValid(dt)) {
    return nullDate;
  }

  return dt;
};

export const createBackendDateIsoString = (date: Date): string =>
  trimEnd(date.toISOString(), 'Z');
