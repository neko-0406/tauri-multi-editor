import React, { createContext, useContext, useEffect, useState } from 'react';

export type AppStateType = {
  openWorkspace: string;
  selectedTabId: string;
  sideMenuSpaceWidth: number;
};

const defaultAppSetting: AppStateType = {
  openWorkspace: '',
  selectedTabId: '',
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

  // デモデータで内容を初期化
  useEffect(() => {
    setAppState((state) => ({ ...state }));
  }, []);

  return <AppStateContext.Provider value={{ appState, setAppState }}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);
