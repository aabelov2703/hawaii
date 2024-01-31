import React, { createContext, useContext, ReactNode, useState } from "react";

interface MarkerOption {
  position: {
    lat: number;
    lng: number;
  };
  name: string;
}

interface AppContextProps {
  toggleFilter: boolean;
  setToggleFilter: (toggleFilter: boolean) => void;
  toggleMap: boolean;
  setToggleMap: (toggleMap: boolean) => void;
  markerOptions: MarkerOption[];
  setMarkerOptions: (markerOptions: MarkerOption[]) => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const [toggleMap, setToggleMap] = useState<boolean>(false);
  const [markerOptions, setMarkerOptions] = useState<MarkerOption[]>([]); // Инициализация стейта для маркеров

  const appContextValues: AppContextProps = {
    toggleFilter,
    setToggleFilter,
    toggleMap,
    setToggleMap,
    markerOptions,
    setMarkerOptions,
  };

  return (
    <AppContext.Provider value={appContextValues}>
      {children}
    </AppContext.Provider>
  );
};

// helper: userHook
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
