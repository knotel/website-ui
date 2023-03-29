import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ pointer, onMarkerPress, lat, lng, showInMaps }) => {
  const [tooltipVisible, setVisible] = useState(false);

  const toggleTooltip = () => {
    setVisible(!tooltipVisible);
  };

  const handleClickOutside = () => setVisible(false);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {showInMaps ? (
        <a
          style={{
            padding: 10,
            background: "white",
            position: "absolute",
            minWidth: "12rem",
            border: "1px solid black",
            bottom: 50,
            textAlign: "center",
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
          href={`https://maps.google.com/?q=${lat},${lng}`}
          target={"_blank"}
        >
          <div>
            <span>Show in Google Maps</span>
          </div>
        </a>
      ) : null}
      <div onClick={toggleTooltip}>{pointer}</div>;
    </div>
  );
};

const GoogleMaps = ({
  showInMaps = true,
  markers = [],
  center = {},
  zoom = 11,
  APIKey,
  markerIcon,
  onMarkerPress,
}) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: APIKey }}
        center={center}
        zoom={zoom}
        options={(maps) => ({
          styles: [
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#444444",
                },
              ],
            },
            {
              featureType: "landscape",
              elementType: "all",
              stylers: [
                {
                  color: "#f2f2f2",
                },
              ],
            },
            {
              featureType: "landscape",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#f0e3ce",
                },
                {
                  lightness: "39",
                },
                {
                  gamma: "1.01",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "all",
              stylers: [
                {
                  saturation: -100,
                },
                {
                  lightness: 45,
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  color: "#ffffff",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "all",
              stylers: [
                {
                  visibility: "simplified",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "transit",
              elementType: "all",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [
                {
                  color: "#e7e1d6",
                },
                {
                  visibility: "on",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#d9d9d9",
                },
              ],
            },
          ],
        })}
      >
        {Array.isArray(markers) &&
          markers.length > 0 &&
          markers.map(({ loc: { lat = 0, lng = 0 } }, index) => (
            <Marker
              showInMaps={showInMaps}
              key={`marker_${index}`}
              lat={lat}
              lng={lng}
              pointer={
                <span
                  onClick={() => onMarkerPress?.(lat, lng)}
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "0",
                    transform: "translateX(-50%)",
                  }}
                >
                  <img
                    data-marker-lat={lat}
                    data-marker-lng={lng}
                    src={markerIcon}
                    alt="marker"
                  />
                </span>
              }
            />
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
