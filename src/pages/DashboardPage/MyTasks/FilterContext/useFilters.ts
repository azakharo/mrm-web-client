import {useContext} from 'react';

import {ContextProps, FilterContext} from './Context';

export const useFilters = (): ContextProps =>
  useContext<ContextProps>(FilterContext);
