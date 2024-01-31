import { useAppContext } from "@/context/appContext";
import { useEffect, useState } from "react";
import Button from "../global/button/button";
import { addMarker, removeMarker } from "@/utils/helpers";

const Card = ({ point }: any) => {
  const { toggleMap, setMarkerOptions, markerOptions } = useAppContext();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setAdded(
      (prev) =>
        markerOptions.filter((marker) => marker.name === point.name).length > 0
    );
  }, [point, markerOptions]);

  const addClick = () => {
    if (
      markerOptions.filter((maker) => maker.name === point.name).length === 0
    ) {
      // add marker
      addMarker(point, setMarkerOptions); // add marker
      setAdded(true);
    } else {
      // remove marker
      removeMarker(point, markerOptions, setMarkerOptions);
      setAdded(false);
    }
  };

  return (
    <div className="p-4 shadow-shadow-1 rounded-xl border border-solid border-m-blue-2 border-1">
      <div className="text-lg py-2">{point.name}</div>
      <div className="font-thin text-xs">{point.descr || ""}</div>
      <div className="flex justify-between items-center my-2">
        <p className="text-sm pb-1">{point.tag}</p>
        {toggleMap && (
          <Button
            size="sm"
            type={!added ? "success" : "error"}
            label={<span className="">{!added ? "+" : "-"}</span>}
            onClick={addClick}
            style={{
              width: "auto",
              borderRadius: "100%",
              padding: `${added ? 3 : 2}px`,
              fontSize: "24px",
            }}
          />
        )}
      </div>
      <a href={point.link} target="_blank" className="block">
        <img
          className="max-w-[256px] mobile:max-w-[400px] max-h-[240px] mx-auto rounded"
          src={point.img}
          alt={point.name}
          loading="lazy"
        />
        <span className="block font-thin text-xs text-m-color-1 pt-1">
          Click to explore more photos
        </span>
      </a>
    </div>
  );
};

export default Card;
