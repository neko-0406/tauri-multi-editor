import React, { createContext, useContext, useEffect, useState } from 'react';
import { FileItemData } from '../Tabs';

export type AppStateType = {
  openWorkspace: string;
  selectedTabId: string;
  openFiles: FileItemData[];
  sideMenuSpaceWidth: number;
};

const defaultAppSetting: AppStateType = {
  openWorkspace: '',
  selectedTabId: '',
  openFiles: [],
  sideMenuSpaceWidth: 0,
};

const filesData: FileItemData[] = [
  {
    id: 'test-1',
    title: 'test-title1',
    components: {
      type: 'md',
      path: './test1.md',
    },
  },
  {
    id: 'test-2',
    title: 'test-title2',
    components: {
      type: 'md',
      path: './test2.md',
    },
  },
];

const AppStateContext = createContext<{
  appState: AppStateType;
  setAppState: React.Dispatch<React.SetStateAction<AppStateType>>;
}>({
  appState: defaultAppSetting,
  setAppState: () => {},
});

export const AppStateProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [appState, setAppState] = useState<AppStateType>(defaultAppSetting);
  
  useEffect(() => {
    setAppState(state => ({ ...state, openFiles: filesData }));
  }, []);

  return <AppStateContext.Provider value={{ appState, setAppState }}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);
