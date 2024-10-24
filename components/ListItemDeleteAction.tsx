import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import colors from '@/constants/Colors';

interface Props {
    onPress: () => void;
}

export default function ListItemDeleteAction({ onPress }: Props) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color={colors.white}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})
