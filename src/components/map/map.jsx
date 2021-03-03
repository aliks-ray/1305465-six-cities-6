import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {offerType, baseMapCoordinates} from "../../prop-types/prop-types.js";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({baseCoords, offers}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: baseCoords.lat,
        lng: baseCoords.lng
      },
      zoom: baseCoords.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          }
      )
      .addTo(mapRef.current);

    offers.forEach((offer) => {
      const customIcon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet
        .marker(
            {
              lat: offer.lat,
              lng: offer.lng
            },
            {
              icon: customIcon
            }
        )
        .addTo(mapRef.current)
        .bindPopup(offer.title);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [baseCoords, offers]);

  return (
    <div
      id="map"
      style={{
        height: `538px`
      }}
      ref={mapRef}
    ></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
  baseCoords: baseMapCoordinates.isRequired
};

export default Map;
