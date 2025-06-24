import React, { createContext, useContext, useState } from 'react';
import { TabItemData } from '../Tabs';

export type AppStateType = {
  openWorkspace: string;
  openFiles: TabItemData[];
  sideMenuSpaceWidth: number;
};

const defaultAppSetting: AppStateType = {
  openWorkspace: '',
  openFiles: [],
  sideMenuSpaceWidth: 0,
};

const AppStateContext = createContext<{
  appState: AppStateType;
  setAppState: React.Dispatch<React.SetStateAction<AppStateType>>;
}>({
  appState: defaultAppSetting,
  setAppState: () => {},
});

export const AppStateProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [appState, setAppState] = useState<AppStateType>(defaultAppSetting);

  return <AppStateContext.Provider value={{ appState, setAppState }}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);
