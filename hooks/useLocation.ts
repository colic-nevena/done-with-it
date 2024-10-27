import { useState, useEffect } from "react";
import * as Location from "expo-location";
import logger from "../utils/Logger"

const useLocation = () => {
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>();

    const getLocation = async () => {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();

            if (!granted) return

            const result = await Location.getLastKnownPositionAsync();
            if (result) {
                const { coords: { latitude, longitude } } = result;
                setLocation({ latitude, longitude })
            }
        } catch (error) {
            logger.log(error)
        }
    }

    useEffect(() => {
        getLocation();
    }, [])

    return location;
}

export default useLocation;