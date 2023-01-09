import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {

    const position = [49.28594, -123.11129]

    const end = [49.27450, -123.12189]

    const purpleOption = { color: 'purple'};
    const redOption = { color: 'red'};

    const polyline = [
        [49.28594, -123.11129],
        [49.28250, -123.11865],
        [49.27450, -123.12189],
    ]

    return(
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true} >

            <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

        <Marker position={position}>

            <Popup>
                Skytrain. <br/> Waterfront.
            </Popup>

        </Marker>

        <CircleMarker center={end} pathOptions={redOption} radius={20}>
            <Popup>
        Final Checkpoint
            </Popup>
        </CircleMarker>


        <Polyline pathOptions={purpleOption} positions={polyline}/>


        </MapContainer>
    )
}