import React, { useState } from "react";
import { MapContainer, ImageOverlay, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import './mapMarker.scss';
import { markers, dataMarkers } from "../../../constant";
import ContentWrapper from '../../component/contentWrapper/ContentWrapper';


// Custom Image Size & Bounds
const imageBounds = [
    [0, 0],  // Top-left (Y, X)
    [500, 800] // Bottom-right (Y, X)
  ];
  
  // Custom Marker Icon
const customIcon = new L.Icon({
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg",
    iconSize: [20, 20]
});
  
const Mapper = ({...props}) => {
    const { map} = props;

    return (
        <div className="Map_container">
            <MapContainer   
                center={[250, 400]} // Center of the image
                zoom={1}
                minZoom={1}
                maxZoom={1} // Prevent zooming
                dragging={false} // Disable dragging
                doubleClickZoom={false} // Prevent zooming on double click
                scrollWheelZoom={false} // Disable scroll zoom
                touchZoom={false} // Disable pinch zoom
                boxZoom={false} // Disable zooming by drawing a box
                style={{ height: "100vh", width: "100%", background: "#eee" }}
                crs={L.CRS.Simple} 
                >
                <ImageOverlay url={map} bounds={imageBounds} />

                {markers.map((marker, index) => (
                    <Marker key={index} position={marker.position} icon={customIcon}>
                    <Popup maxHeight={150}>
                        <ContentWrapper 
                            className="markers"
                            name={marker.name}
                            detail={marker.detail}
                            image={[marker.image]}

                        />
                    </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
};

export default Mapper;