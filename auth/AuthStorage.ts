import * as SecureStore from "expo-secure-store"
import { jwtDecode } from "jwt-decode"
import logger from "../utils/Logger"

const key = "authToken"

const storeToken = async (authToken: string) => {
    try {
        await SecureStore.setItemAsync(key, authToken)
    } catch (error) {
        logger.log(error)
    }
}

const getUser = async () => {
    const token = await getToken()
    return token ? jwtDecode(token) : null
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (error) {
        logger.log(error)
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key)
    } catch (error) {
        logger.log(error)
    }
}

export default {
    storeToken,
    removeToken,
    getUser,
    getToken
}