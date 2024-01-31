"use client";
import { useAppContext } from "@/context/appContext";
import Button from "../global/button/button";

const Filters = ({ options, setValues, values, info }: any) => {
  const { toggleFilter } = useAppContext();

  const handleClick = (e) => {
    const selected = e.target.textContent;
    setValues((prev) => {
      return prev.includes(e.target.textContent)
        ? prev.filter((item) => item !== selected)
        : [...prev, selected];
    });
  };

  return (
    <div
      className={`border-b border-solid border-m-blue-2 border-1 ${
        toggleFilter ? "max-h-[9999px] py-4" : "max-h-0 py-0"
      } overflow-hidden transition-max-h transform transition-all`}
    >
      <div className={`flex justify-center bg-m-blue-1 p-4 `}>
        {options.map((option: any, idx: number) => (
          <Button
            key={idx}
            label={option}
            onClick={handleClick}
            style={{
              margin: "4px",
              border: values.includes(option)
                ? "#DCF0FF solid 1px"
                : "#D8D8D8 solid 1px",
              backgroundColor: values.includes(option)
                ? "#E7F2FF"
                : "transparent",
              color: values.includes(option) ? "slateblue" : "gray",
            }}
          />
        ))}
      </div>
      <div className="text-center">{info}</div>
    </div>
  );
};

export default Filters;
