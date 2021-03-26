import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {offerType} from "../../prop-types/prop-types.js";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({offers, currentOfferId}) => {
  const mapRef = useRef();

  const baseZoom = offers[0].city.location.zoom;
  const baseCoords = {
    lat: offers[0].city.location.lat,
    lng: offers[0].city.location.lng
  };

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: baseCoords.lat,
        lng: baseCoords.lng
      },
      zoom: baseZoom,
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
        iconUrl: `${
          currentOfferId !== offer.id ? `./img/pin.svg` : `./img/pin-active.svg`
        }`,
        iconSize: [30, 30]
      });

      leaflet
        .marker(
            {
              lat: offer.location.lat,
              lng: offer.location.lng
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
  }, [baseCoords, currentOfferId]);

  return (
    <div
      id="map"
      style={{
        height: `538px`
      }}
    ></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
  currentOfferId: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
};

export default Map;
