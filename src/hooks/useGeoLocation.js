import { useEffect, useState } from "react";

function useGeoLocation() {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat:'', lng:'' }
    });


    const onSuccess = function(location) {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            }
        })
        console.log(location);
    }

    const onError = function() {
        setLocation({
            loaded: true,
            error: {
                code: 0,
                message: 'Could not get your location'},
        })
    }

    useEffect(() => {
        if (navigator.geolocation) 
        // console.log('use effect started')
        navigator.geolocation.getCurrentPosition(onSuccess, onError)

        if(!navigator.geolocation) {
            onError();
        }
    }, [])

    console.log('gone through geolocation hook', location);
    return location;
}

export default useGeoLocation;