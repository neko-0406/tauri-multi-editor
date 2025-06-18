import React, { createContext, useContext, useState } from 'react';

export type AppSettingType = {
  theme: string;
  workspaces: string[];
  openWorkspace: string;
  googleAuthClientId: string;
  googleAuthClientSecret: string;
  geminiApiKey: string;
};

const defaultAppSetting: AppSettingType = {
  theme: 'light',
  workspaces: [],
  openWorkspace: '',
  googleAuthClientId: '',
  googleAuthClientSecret: '',
  geminiApiKey: '',
};

const AppSettingContext = createContext<{
  settings: AppSettingType;
  setSettings: React.Dispatch<React.SetStateAction<AppSettingType>>;
}>({
  settings: defaultAppSetting,
  setSettings: () => {},
});

export const AppSettingProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [settings, setSettings] = useState<AppSettingType>(defaultAppSetting);

  return <AppSettingContext.Provider value={{ settings, setSettings }}>{children}</AppSettingContext.Provider>;
};

export const useAppSettings = () => useContext(AppSettingContext);
