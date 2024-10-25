import React from "react";
import { View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "@/constants/Colors";
import { Href, Link } from "expo-router";

interface Props {
    href: Href
}

function NewListingButton(props: Props) {
    return (
        <Link href={props.href} asChild>
            <Pressable>
                <View style={styles.container}>
                    <MaterialCommunityIcons
                        name="plus-circle"
                        color={colors.white}
                        size={40}
                    />
                </View>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 30,
        height: 80,
        justifyContent: "center",
        width: 80,
    },
});

export default NewListingButton;