import { ReactNode } from "react";

export interface MarkerOption {
  position: {
    lat: number;
    lng: number;
  };
  name: string;
  tag: string;
}

export interface AppContextProps {
  toggleFilter: boolean;
  setToggleFilter: (toggleFilter: boolean) => void;
  toggleMap: boolean;
  setToggleMap: (toggleMap: boolean) => void;
  markerOptions: MarkerOption[];
  setMarkerOptions: (markerOptions: MarkerOption[]) => void;
}

export interface AppContextProviderProps {
  children: ReactNode;
}
