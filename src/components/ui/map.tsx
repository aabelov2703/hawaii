"use client";
import { useAppContext } from "@/context/appContext";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState } from "react";
import { oahuHawaii } from "@/utils/helpers";
import { MarkerOption } from "@/types/types";

const Map = () => {
  const { toggleMap, markerOptions } = useAppContext();
  const [selectedMarker, setSelectedMarker] = useState<MarkerOption | null>(
    null
  );
  const [center, setCenter] = useState(oahuHawaii);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string,
  });

  return (
    <div
      className={`flex justify-center bg-m-blue-1 border-b border-solid border-m-blue-2 border-1 transition-all w-full p-10 ${
        toggleMap ? "max-h-[9999px] py-4" : "max-h-0 py-0"
      } overflow-hidden transition-max-h transform transition-all`}
    >
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "400px",
          }}
          center={
            selectedMarker?.position?.lat
              ? selectedMarker.position
              : center ?? { lat: 0, lng: 0 }
          }
          zoom={11}
          onClick={() => setSelectedMarker(null)}
        >
          {markerOptions?.map((marker, idx) => (
            <Marker
              key={idx}
              position={marker.position}
              onClick={() => {
                setCenter(marker.position);
                setSelectedMarker(marker);
              }}
            />
          ))}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.position}
              onCloseClick={() => {
                setCenter(selectedMarker.position);
                setSelectedMarker(null);
              }}
            >
              <div>{selectedMarker.name}</div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
