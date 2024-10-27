import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import logger from "../utils/Logger"

const prefix = "cache-"
const expiryInMinutes = 5

export async function store(key: string, value: any) {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }

        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    } catch (error) {
        logger.log(error)
    }
}

// violated CQS (command query segregation)
export async function get(key: string) {
    try {
        const value = await AsyncStorage.getItem(prefix + key)
        if (!value) return null

        const item = JSON.parse(value)
        if (!item) return null

        if (isExpired(item)) {
            await AsyncStorage.removeItem(prefix + key)
            return null
        }

        return item.value
    } catch (error) {
        logger.log(error)
    }
}

function isExpired(item: { value: string; timestamp: Date }) {
    const now = moment(Date.now())
    const storedTime = moment(item.timestamp)
    const isExpired = now.diff(storedTime, "minutes") > expiryInMinutes

    return isExpired
}

export default {
    store,
    get
}