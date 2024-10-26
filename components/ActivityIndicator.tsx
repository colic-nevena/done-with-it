import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function ActivityIndicator({ visible = false }) {
    if (!visible) return null;

    return (
        <View style={styles.overlay}>
            <LottieView
                autoPlay
                loop
                source={require("../assets/animations/loader.json")}
                style={styles.loader}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 100
    },
    loader: {
        width: 250,
        height: 250,
    },
});

export default ActivityIndicator;
