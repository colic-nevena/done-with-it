import Constants from "expo-constants";

const settings = {
    dev: {
        apiUrl: `${process.env.EXPO_PUBLIC_BASE_URL}/api`,
    },
    staging: {
        apiUrl: `${process.env.EXPO_PUBLIC_BASE_URL}/api`,
    },
    prod: {
        apiUrl: `${process.env.EXPO_PUBLIC_BASE_URL}/api`,
    },
};

const getCurrentSettings = () => {
    if (__DEV__) return settings.dev;
    if (Constants.expoConfig?.extra?.releaseChannel === "staging") return settings.staging;
    return settings.prod;
};

export default getCurrentSettings();
