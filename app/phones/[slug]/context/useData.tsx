'use client';

import {useContext} from 'react';
import {DataContext} from './DataProvider';

export const useDataContext = () => useContext(DataContext);
