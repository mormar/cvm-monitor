import React, { Component } from "react";
import styled from "styled-components";
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const MapBox = styled.div`
  margin: 20px 0px;
`;

class MapComponent extends Component {
  render() {
    return (
      <MapBox>
        <Map
          style={{ height: "480px", width: "100%" }}
          zoom={1.5}
          center={[20, 0]}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {this.props.repositoryData.recommendedStratum1s.map(stratumOneMap => (
            <div key={stratumOneMap.id}>
              <Marker position={stratumOneMap.location.ll}>
                <Tooltip>{stratumOneMap.name}</Tooltip>
              </Marker>
            </div>
          ))}
        </Map>
      </MapBox>
    );
  }
}

export default MapComponent;
