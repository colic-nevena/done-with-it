import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, TextInput, KeyboardTypeOptions } from 'react-native'
import defaultStyles from "../constants/Styles"

interface Props {
    icon?: any;
    placeholder: string;
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
    autoCorrect?: boolean;
    keyboardType?: KeyboardTypeOptions | undefined;
    textContentType?: any;
    secureTextEntry?: boolean;
    maxLength?: number;
    multiline: boolean;
    numberOfLines?: number;
    width?: number;
    onChangeText: (text: string) => void;
    onBlur?: () => void;
}

export default function AppTextInput(props: Props) {
    return (
        <View style={[styles.container, { width: props.width || "100%" }]}>
            {props.icon && <MaterialCommunityIcons style={styles.icon} name={props.icon} size={20} color={defaultStyles.colors.mediumGrey} />}

            <TextInput
                placeholderTextColor={defaultStyles.colors.mediumGrey}
                style={defaultStyles.text}
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightGrey,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
        marginTop: 4
    }
})