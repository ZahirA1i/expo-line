import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {

    //stations
    const Waterfront = [49.28594, -123.11129]
    const Burrard = [49.285581150633966, -123.12012245876285]
    const Granville = [49.28276795358473, -123.1164699145821]
    const StadiumChinatownStation = [49.28010484687972, -123.11012142014103]
    const MainStreetScienceWorldStation =  [49.273374980784865, -123.10037145876296]
    const CommercialBroadwayStation = [49.262721001091556, -123.06927941643552]
    const NanaimoStation = [49.24844626535717, -123.05598167410812]
    const a29th = [49.24436337925635, -123.04537402992739]
    const JoyceCollingwood = [49.23855530902799, -123.0317256145831]
    const Patterson = [49.22991271599505, -123.01265107225555]
    const Metrotown = [49.22593989446889, -123.00385127225569]
    const RoyalOak = [49.220193228996386, -122.98845204229738]
    const Edmonds =  [49.21254265709066, -122.95914504342]
    const a22nd = [49.200068725477024, -122.94922489130668]
    const NewWest = [49.20159918383558, -122.91263972992837]
    const Columbia = [49.204943945073374, -122.90607708574763]
    const ScottRoad =  [49.204575904842045, -122.87402738018886]
    const Gateway = [49.1991136014707, -122.85066387225632]
    const SurreyCentral = [49.18971392944762, -122.84792071458409]
    const KingGeorge = [49.1829310367517, -122.84473292807587]
    const Sapperton =  [49.224860238697396, -122.88949270294468]
    const Braid = [49.23268213068468, -122.88456287225554]
    const Lougheed = [49.24875892482227, -122.89717730665]
    const ProdWay = [49.25367827613695, -122.91868207173422]
    




    //endpoints
    const end1 = [49.1829310367517, -122.84473292807587]
    const end2 = [49.25367827613695, -122.91868207173422]

    const purpleOption = { color: 'purple'};
    const redOption = { color: 'red'};

    //line
    const polyline = [
        [49.28594, -123.11129],
        [49.285581150633966, -123.12012245876285],
        [49.28276795358473, -123.1164699145821],
        [49.28010484687972, -123.11012142014103],
        [49.273374980784865, -123.10037145876296],
        [49.262721001091556, -123.06927941643552],
        [49.24844626535717, -123.05598167410812],
        [49.24436337925635, -123.04537402992739],
        [49.23855530902799, -123.0317256145831],
        [49.22991271599505, -123.01265107225555],
        [49.22593989446889, -123.00385127225569],
        [49.220193228996386, -122.98845204229738],
        [49.21254265709066, -122.95914504342],
        [49.200068725477024, -122.94922489130668],
        [49.20159918383558, -122.91263972992837],
        [49.204943945073374, -122.90607708574763],
        [49.204575904842045, -122.87402738018886],
        [49.1991136014707, -122.85066387225632],
        [49.18971392944762, -122.84792071458409],
        [49.1829310367517, -122.84473292807587],


    ]

    const polylineB = [

        [49.204943945073374, -122.90607708574763], 
        [49.224860238697396, -122.88949270294468], 
        [49.23268213068468, -122.88456287225554], 
        [49.24875892482227, -122.89717730665], 
        [49.25367827613695, -122.91868207173422], 

    ]

    return(
        <MapContainer className={style.map} center={Waterfront} zoom={14} scrollWheelZoom={true} >

            <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

        <Marker position={Waterfront}>

            <Popup>
                Skytrain. <br/> Waterfront.
            </Popup>

        </Marker>

        <Marker position={Burrard}>

            <Popup>
                Skytrain. <br/> Burrard.
            </Popup>

        </Marker>

        <Marker position={Granville}>

            <Popup>
                Skytrain. <br/> Granville.
            </Popup>

        </Marker>

        <Marker position={StadiumChinatownStation}>

            <Popup>
                Skytrain. <br/> Stadium Chinatown Station.
            </Popup>

        </Marker>

        <Marker position={MainStreetScienceWorldStation}>

            <Popup>
                Skytrain. <br/> Main Street Science World Station.
            </Popup>

        </Marker>

         <Marker position={CommercialBroadwayStation}>

            <Popup>
                Skytrain. <br/> Commercial Broadway Station.
            </Popup>

        </Marker>

        <Marker position={NanaimoStation}>

            <Popup>
                Skytrain. <br/> Nanaimo Station.
            </Popup>

        </Marker>

         <Marker position={a29th}>

            <Popup>
                Skytrain. <br/> 29th Ave Station.
            </Popup>

        </Marker>

        <Marker position={JoyceCollingwood}>

            <Popup>
                Skytrain. <br/> Joyce-Collingwood Station.
            </Popup>

        </Marker>

         <Marker position={Patterson}>

            <Popup>
                Skytrain. <br/> Patterson Station.
            </Popup>

        </Marker>

        <Marker position={Metrotown}>

            <Popup>
                Skytrain. <br/> Metrotown Station.
            </Popup>

        </Marker>

        <Marker position={RoyalOak}>

            <Popup>
                Skytrain. <br/> RoyalOak Station.
            </Popup>

        </Marker>

         <Marker position={Edmonds}>

            <Popup>
                Skytrain. <br/> Edmonds Station.
            </Popup>

        </Marker>
 
        <Marker position={a22nd}>

            <Popup>
                Skytrain. <br/> 22nd Street Station.
            </Popup>

        </Marker>

        <Marker position={NewWest}>

            <Popup>
                Skytrain. <br/> NewWestminster Station.
            </Popup>

        </Marker>

         <Marker position={Columbia}>

            <Popup>
                Skytrain. <br/> Columbia Station.
            </Popup>

        </Marker>

         <Marker position={ScottRoad}>

            <Popup>
                Skytrain. <br/> Scott Road Station.
            </Popup>

        </Marker>

        <Marker position={Gateway}>

            <Popup>
                Skytrain. <br/> Gateway Station.
            </Popup>

        </Marker>

        <Marker position={SurreyCentral}>

            <Popup>
                Skytrain. <br/> Surrey Central Station.
            </Popup>

        </Marker>

        <Marker position={KingGeorge}>

            <Popup>
                Skytrain. <br/> King George Station.
            </Popup>

        </Marker>

         <Marker position={Sapperton}>

            <Popup>
                Skytrain. <br/> Sapperton Station.
            </Popup>

        </Marker>

        <Marker position={Braid}>

            <Popup>
                Skytrain. <br/> Braid Station.
            </Popup>

        </Marker>
        
        <Marker position={Lougheed}>

            <Popup>
                Skytrain. <br/> Lougheed Town Centre Station.
            </Popup>

        </Marker>

        <Marker position={ProdWay}>

            <Popup>
                Skytrain. <br/> Production Way University Station.
            </Popup>

        </Marker>

        <CircleMarker center={end1} pathOptions={redOption} radius={20}>
            <Popup>
        Final Checkpoint: KingGeorge
            </Popup>
        </CircleMarker>

        <CircleMarker center={end2} pathOptions={redOption} radius={20}>
            <Popup>
        Final Checkpoint: Production Way University
            </Popup>
        </CircleMarker>

        <Polyline pathOptions={purpleOption} positions={polyline}/>
        <Polyline pathOptions={purpleOption} positions={polylineB}/>



        </MapContainer>
    )
}