import React from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ pointer }) => {
  return <div>{pointer}</div>;
};

const GoogleMaps = ({
  markers = [],
  center = {},
  zoom = 11,
  APIKey,
  markerIcon,
}) => {
  console.log("marker icon --->", markerIcon);
  return (
    // Important! Always set the container height explicitly
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: APIKey }}
        defaultCenter={center}
        defaultZoom={zoom}
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
              key={`marker_${index}`}
              lat={lat}
              lng={lng}
              pointer={
                <span
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "0",
                    transform: "translateX(-50%)",
                  }}
                >
                  <img src={markerIcon} alt="marker" />
                </span>
              }
            />
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
