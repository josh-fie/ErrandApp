import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useState, useRef, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import useGeoLocation from '../hooks/useGeoLocation';

function MapComp(props) {
    const location = useGeoLocation();

    const [center, setCenter] = useState(location.coordinates)
    // const [center, setCenter] = useState({lat: 53.4009223,
    //     lng: -0.3401704})

    // Set state to location upon state change.
    useEffect(() => {
        console.log('Location coordinate change')
        setCenter(location.coordinates);
    }, [location]);

    const ZOOM_LEVEL = 13;
    const mapRef = useRef();

    const newIcon = new Icon({
        iconUrl: require("../assets/geotag.png"),
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
    })

    return (
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

            {props.state.map((errand, index) => {
                console.log(errand);
                return <Marker position={[errand.lat, errand.lng]} icon={newIcon} key={index} attribution='<a href="https://iconscout.com/icons/geotag" target="_blank">Free Geotag Icon</a> by <a href="https://iconscout.com/contributors/pro-symbols">Pro Symbols</a> on <a href="https://iconscout.com">IconScout</a>'>
                <Popup><p>{errand.name}</p></Popup>
                </Marker>
            })}

            {/* <Marker position={center} icon={newIcon} attribution='<a href="https://iconscout.com/icons/geotag" target="_blank">Free Geotag Icon</a> by <a href="https://iconscout.com/contributors/pro-symbols">Pro Symbols</a> on <a href="https://iconscout.com">IconScout</a>'>
            <Popup><p>{props.state[2].name}</p></Popup>
            </Marker> */}
        </MapContainer>
    )
}

export default MapComp;