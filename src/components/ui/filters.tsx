import { useAppContext } from "@/context/appContext";
import Button from "../global/button/button";
import { MarkerOption } from "@/types/types";

const Filters = ({ options, setValues, values, info }: any) => {
  const { toggleFilter, markerOptions, setMarkerOptions } = useAppContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selected = (e.target as HTMLButtonElement).textContent;
    if (selected !== null) {
      setValues((prev: string[]) => {
        return prev.includes(selected)
          ? prev.filter((item) => item !== selected)
          : [...prev, selected];
      });
      const newMarkers = markerOptions.filter((m) => m.tag === selected);
      setMarkerOptions(newMarkers);
    }
  };

  return (
    <div
      className={`border-b border-solid border-m-blue-2 border-1 ${
        toggleFilter ? "max-h-[9999px] py-4" : "max-h-0 py-0"
      } overflow-hidden transition-max-h transform transition-all`}
    >
      <div className={`flex justify-center flex-wrap bg-m-blue-1 p-4 `}>
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
