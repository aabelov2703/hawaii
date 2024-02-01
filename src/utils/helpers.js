export const addMarker = (point, setMarkerOptions) => {
  setMarkerOptions((prev) => {
    if (!prev.some((marker) => marker.name === point.name)) {
      const coord = point.coord.split(",").map((pts) => +pts);
      const newMarker = {
        position: { lat: coord[0], lng: coord[1] },
        name: point.name,
      };
      return [...prev, newMarker];
    } else {
      return prev;
    }
  });
};

export const removeMarker = (point, markerOptions, setMarkerOptions) => {
  const newList = markerOptions.filter((maker) => maker.name !== point.name);
  console.log("newList", newList);
  setMarkerOptions(newList);
};

export const oahuHawaii = { lat: 21.4311319, lng: -157.9412389 };

export const imgPath = "/assets/img";
