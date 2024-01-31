"use client";
import { useAppContext } from "@/context/appContext";
import Button from "../../global/button/button";

const MapBtn: React.FC = () => {
  const { setToggleMap } = useAppContext();

  return (
    <Button
      label="Show Map"
      onClick={() => setToggleMap((prev: boolean) => !prev)}
    />
  );
};

export default MapBtn;
