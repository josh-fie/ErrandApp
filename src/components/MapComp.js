import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon, divIcon } from 'leaflet';
import { useState, useRef } from 'react';
import "leaflet/dist/leaflet.css";
import classes from './Legend.module.css';
import { useContext } from 'react';
import PrioritiesContext from '../contexts/priority-context';
import CompletedContext from '../contexts/completed-context';

function MapComp(props) {
    const priorityContext = useContext(PrioritiesContext);
    const completedContext = useContext(CompletedContext);


    //unusre if below needs to be state and could just be prop being used instead. Could use setCenter if you want ot travel to specific errands on the map???
    // const [center, setCenter] = useState(props.location)

    const ZOOM_LEVEL = 10;
    const mapRef = useRef();

    // Marker Icon Styles

    const markerHtmlStyles = function(colour) { return `
        background-color: ${colour};
        width: 38px;
        height: 38px;
        display: block;
        position: relative;
        border-radius: 3rem 3rem 0;
        transform: rotate(45deg);
        border: 1px solid #FFFFFF;
    `};

    const newIcon = divIcon({
        iconUrl: require("../assets/geotag.png"),
        className: "my-custom-pin",
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
        html: `<span style="${markerHtmlStyles("black")}" />`
    });

    const newPriorityIcon = divIcon({
        iconUrl: require("../assets/geotag.png"),
        className: "my-custom-pin",
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
        html: `<span style="${markerHtmlStyles("green")}" />`
    });

    const newCompletedIcon = divIcon({
        iconUrl: require("../assets/geotag.png"),
        className: "my-custom-pin",
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
        html: `<span style="${markerHtmlStyles("darkblue")}" />`
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

                const itemIsPriority = priorityContext.itemIsPriority(errand.id);
                const itemIsCompleted = completedContext.itemIsCompleted(errand.id);

                console.log(itemIsPriority, itemIsCompleted);

                if(itemIsCompleted) { return <Marker position={[errand.lat, errand.lng]} icon={newCompletedIcon} key={index} attribution='<a href="https://iconscout.com/icons/geotag" target="_blank">Free Geotag Icon</a> by <a href="https://iconscout.com/contributors/pro-symbols">Pro Symbols</a> on <a href="https://iconscout.com">IconScout</a>'>
                <Popup><div className={classes.errandTitle}><h4>{errand.name}</h4></div><div>{errand.notes}</div></Popup>
                </Marker> };

                if(itemIsPriority) { return <Marker position={[errand.lat, errand.lng]} icon={newPriorityIcon} key={index} attribution='<a href="https://iconscout.com/icons/geotag" target="_blank">Free Geotag Icon</a> by <a href="https://iconscout.com/contributors/pro-symbols">Pro Symbols</a> on <a href="https://iconscout.com">IconScout</a>'>
                <Popup><div className={classes.errandTitle}><h4>{errand.name}</h4></div><div>{errand.notes}</div></Popup>
                </Marker> } else {

                return <Marker position={[errand.lat, errand.lng]} icon={newIcon} key={index} attribution='<a href="https://iconscout.com/icons/geotag" target="_blank">Free Geotag Icon</a> by <a href="https://iconscout.com/contributors/pro-symbols">Pro Symbols</a> on <a href="https://iconscout.com">IconScout</a>'>
                <Popup><div className={classes.errandTitle}><h4>{errand.name}</h4></div><div>{errand.notes}</div></Popup>
                </Marker> 
                }
            }) : null}

            {/* <Marker position={center} icon={newIcon} attribution='<a href="https://iconscout.com/icons/geotag" target="_blank">Free Geotag Icon</a> by <a href="https://iconscout.com/contributors/pro-symbols">Pro Symbols</a> on <a href="https://iconscout.com">IconScout</a>'>
            <Popup><p>{props.state[2].name}</p></Popup>
            </Marker> */}
        </MapContainer>
    )
}

export default MapComp;