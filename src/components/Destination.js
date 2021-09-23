import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Destination({ image, name, location }) {
  return (
    <div className="destination__card">
      <img src={image} alt={location} />
      <div className="destination__info">
        <h5>{name}</h5>
        <div className="destination__location">
          <LocationMarkerIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default Destination;
