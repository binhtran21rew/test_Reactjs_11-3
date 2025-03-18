import React, { useState, useEffect } from "react";
import { MapContainer, ImageOverlay, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import './mapMarker.scss';
import { markers, dataMarkers } from "../../../constant";
import ContentWrapper from '../../component/contentWrapper/ContentWrapper';



  
  // Custom Marker Icon
const customIcon = new L.Icon({
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg",
    iconSize: [20, 20]
});
  
const MapMarker = ({...props}) => {
    const { map} = props;
    const [imageBounds, setImageBounds] = useState([
        [0, 0], // Top-left
        [500, 800] // Bottom-right (default values)
    ]);

    return (
        <div className="Map_container">
            <MapContainer   
                center={[250, 400]} // Center of the image
                zoom={1}
                minZoom={0}
                maxZoom={5} // Prevent zooming
                dragging= {true}
                scrollWheelZoom={false} // Enable zoom with scroll
                doubleClickZoom={false} // Enable double click zoom
                touchZoom={true} // Enable pinch zoom on mobile
                boxZoom={false} // Enable zoom by drawing a box
                style={{ height: "100%", width: "100%"}}
                crs={L.CRS.Simple} 
                className="Map_Mapcontainer"
                >
                <ImageOverlay url={map} bounds={imageBounds} className="Map_img"/>

                {markers.map((marker, index) => (
                    <Marker key={index} position={marker.position} icon={customIcon}>
                    <Popup className="markers_wrapper">
                        <div className="markers_wrapper_row row d-flex w-100 h-100">
                            <div className="markers_wrapper_col col-md-6">
                                <img src={marker.image} className="markers_wrapper_image" />
                            </div>
                            <div className="markers_wrapper_col col-md-6 d-flex justify-content-center">
                                <div className="row d-flex flex-column">
                                    <div className="marker_text col-md-6 w-100 fw-bold fst-italic">{marker.name}</div>
                                    <div className="marker_detail col-md-6 w-100">{marker.detail}</div>

                                </div>
                            </div>
                        </div>
                    </Popup>
                     </Marker>
                ))}
            </MapContainer>
        </div>
    )
};

export default MapMarker;