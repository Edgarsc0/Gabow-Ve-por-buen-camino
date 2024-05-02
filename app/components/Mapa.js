"use client"

import { MapContainer, TileLayer, Marker, ZoomControl, Popup } from "react-leaflet";
import ResetViewControl from '@20tab/react-leaflet-resetview';
import 'leaflet/dist/leaflet.css';


export default function () {
    return <MapContainer
        style={{
            width: "100%",
            height: "100vh"
        }}
        center={[19.436403067595723, -99.15872007059457]}
        zoom={11}
        zoomControl={false}
    >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ZoomControl position="bottomleft" />
        <ResetViewControl position='bottomleft' icon="url(pointer.png)" />
    </MapContainer >
}