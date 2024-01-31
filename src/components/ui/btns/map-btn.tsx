"use client";
import { useAppContext } from "@/context/appContext";
import Button from "../../global/button/button";

const MapBtn: React.FC = () => {
  const { toggleMap, setToggleMap } = useAppContext();

  return <Button label="Show Map" onClick={() => setToggleMap(!toggleMap)} />;
};

export default MapBtn;
