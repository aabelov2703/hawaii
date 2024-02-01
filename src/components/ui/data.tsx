"use client";
import { useAppContext } from "@/context/appContext";
import Card from "./card";
import { Key } from "react";

const Data = ({ data }: any) => {
  const { toggleMap } = useAppContext();
  return (
    <div
      className={`flex flex-wrap justify-center gap-0 gap-y-1 mobile:gap-2 sm:gap-x-6 sm:gap-y-4 my-4 ${
        toggleMap ? "overflow-auto" : ""
      }`}
    >
      {data.map((pts: any, idx: Key | null | undefined) => (
        <div key={idx}>
          <Card point={pts} />
        </div>
      ))}
    </div>
  );
};

export default Data;
