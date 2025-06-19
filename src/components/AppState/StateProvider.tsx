import React, { createContext, useContext, useState } from 'react';
import { MemoCardInfo } from '../MemoCard';

export type AppStateType = {
    memoCardInfos: MemoCardInfo[]
};

const defaultAppSetting: AppStateType = {
    memoCardInfos: []
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

export const useAppSettings = () => useContext(AppStateContext);