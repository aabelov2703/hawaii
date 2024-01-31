"use client";
import { useAppContext } from "@/context/appContext";
import Card from "./card";

const Data = ({ data }: any) => {
  const { toggleMap } = useAppContext();
  return (
    <div
      className={`flex flex-wrap justify-center gap-x-6 gap-y-4 my-4 z-10 ${
        toggleMap ? "overflow-auto" : ""
      }`}
    >
      {data.map((pts, idx) => (
        <div key={idx}>
          <Card point={pts} />
        </div>
      ))}
    </div>
  );
};

export default Data;
