// "use client";
// import jsVectorMap from "jsvectormap";
// import "jsvectormap/dist/css/jsvectormap.css";
// import React, { useEffect } from "react";
// import "../js/us-aea-en";

// const MapOne: React.FC = () => {
//   useEffect(() => {
//     const mapOne = new jsVectorMap({
//       selector: "#mapOne",
//       map: "us_aea_en",
//       zoomButtons: true,

//       regionStyle: {
//         initial: {
//           fill: "#C8D0D8",
//         },
//         hover: {
//           fillOpacity: 1,
//           fill: "#3056D3",
//         },
//       },
//       regionLabelStyle: {
//         initial: {
//           fontFamily: "Satoshi",
//           fontWeight: "semibold",
//           fill: "#fff",
//         },
//         hover: {
//           cursor: "pointer",
//         },
//       },

//       labels: {
//         regions: {
//           render(code: string) {
//             return code.split("-")[1];
//           },
//         },
//       },
//     });

//     return () => {
//       mapOne.destroy();
//     };
//   }, []);

//   return (
//     <div className="col-span-12  rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
//       <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
//         Region labels
//       </h4>
//       <div className="h-[393px]">
//         <div id="mapOne" className="mapOne map-btn"></div>
//       </div>
//     </div>
//   );
// };

// export default MapOne;
import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";

import allStates from "./data/allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const markers = [
  { markerOffset: -20, name: "Chicago", coordinates: [-87.6298, 41.8781] },
  { markerOffset: -20, name: "Boston", coordinates: [-71.0589, 42.3601] },
  { markerOffset: -20, name: "Tulsa", coordinates: [-95.9928, 36.154] },
  { markerOffset: -20, name: "Baltimore", coordinates: [-76.6122, 39.2904] },
  { markerOffset: -20, name: "Miami", coordinates: [-80.1918, 25.7617] },
  {
    markerOffset: 30,
    name: "Washington, D.C.",
    coordinates: [-77.0369, 38.9072],
  },
  { markerOffset: -20, name: "Los Angeles", coordinates: [-118.2426, 34.0549] },
];

const MapOne = () => {
  return (
    <>
       <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies, outline, borders }) => (
          <>
            <Geography geography={outline} fill="#E9E3DA" />
            <Geography geography={borders} fill="none" stroke="#FFF" />
          </>
        )}
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates} id={name}>
          {/* <circle r={15} fill="#E42A1D" stroke="#fff" strokeWidth={2} /> */}
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
    </>
  );
};

export default MapOne;