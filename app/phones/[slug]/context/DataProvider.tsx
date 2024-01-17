'use client';

import React, {FC, ReactNode, createContext} from 'react';

import {DataContextType} from './types';

export const DataContext = createContext<DataContextType>({} as DataContextType);

interface DataProviderProps {
    children: ReactNode;
    value: any;
}

const DataProvider: FC<DataProviderProps> = ({children, value}) => {
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
