import React from 'react'
import { View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

interface Props {
    name: any;
    size?: number;
    backgroundColor?: string;
    iconColor?: string;
}

export default function Icon({ name, size = 40, backgroundColor = "black", iconColor = "white" }: Props) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <MaterialCommunityIcons
                name={name}
                color={iconColor}
                size={size * 0.5}
            />
        </View>
    )
}
