import {useContext} from 'react';

import {ContextProps, FilterContext} from './Context';

const useFilters = (): ContextProps => useContext<ContextProps>(FilterContext);

export default useFilters;
