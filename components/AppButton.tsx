import React, { forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '@/constants/Colors';

interface Props {
    title: string;
    color?: string;
    href?: any;
    role?: any;
    onPress?: () => void; // optional for usage inside the Link
}

const AppButton = forwardRef<TouchableOpacity, Props>(({ title, onPress, color = colors.primary }, ref) => {
    return (
        <TouchableOpacity ref={ref} style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 13,
        width: "100%",
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
});

export default AppButton;
