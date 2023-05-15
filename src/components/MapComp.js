import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useState, useRef } from 'react';
import "leaflet/dist/leaflet.css";
import NewErrandForm from './NewErrandForm';

function MapComp(props) {
    // const geoLocation = useGeoLocation(); Moved to the App Component and the value from geolocation will be passed into the MapComp through the AddErrandsPage.js

    // const [clickPos, setClickPosition] = useState(null);

    //unusre if below needs to be state and could just be prop being used instead. Could use setCenter if you want ot travel to specific errands on the map???
    // const [center, setCenter] = useState(props.location)

    // console.log(props.location);

    const ZOOM_LEVEL = 10;
    const mapRef = useRef();

    const newIcon = new Icon({
        iconUrl: require("../assets/geotag.png"),
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
    });

    function HandleClickEvent(props) {
        const map = useMapEvents({
          click: (e) => {
            
            // ShowForm
                // onSubmit of Form - add 
            props.setClickPosition(e.latlng); //do this at the end of handling so that state and form controls all handled. This way hopefully once the state changes this will be converted into a refresh and new marker and popup.

            // conditional needed so that if another click not enabled if form is open. Form need to be closed first.

            props.formActivate();
          }});

        return null;
    }


    return (
        <MapContainer center={props.location} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

            <HandleClickEvent formActivate={props.formActivate} setClickPosition={props.setClickPosition}/>

            {props.state ? props.state.map((errand, index) => {
                // console.log(errand);
                return <Marker position={[errand.lat, errand.lng]} icon={newIcon} key={index} attribution='<a href="https://iconscout.com/icons/geotag" target="_blank">Free Geotag Icon</a> by <a href="https://iconscout.com/contributors/pro-symbols">Pro Symbols</a> on <a href="https://iconscout.com">IconScout</a>'>
                <Popup><p>{errand.name}</p></Popup>
                </Marker>
            }) : null}

            {/* <Marker position={center} icon={newIcon} attribution='<a href="https://iconscout.com/icons/geotag" target="_blank">Free Geotag Icon</a> by <a href="https://iconscout.com/contributors/pro-symbols">Pro Symbols</a> on <a href="https://iconscout.com">IconScout</a>'>
            <Popup><p>{props.state[2].name}</p></Popup>
            </Marker> */}
        </MapContainer>
    )
}

export default MapComp;