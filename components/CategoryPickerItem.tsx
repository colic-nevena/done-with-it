import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import AppText from './AppText';

interface Props {
    item: any;
    onPress: (item: any) => void;
}

export default function CategoryPickerItem({ onPress, item }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon
                    backgroundColor={item.backgroundColor}
                    name={item.icon}
                    size={80}
                />
            </TouchableOpacity>
            <AppText style={styles.label} text={item.label} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%"
    },
    label: {
        marginTop: 5,
        fontSize: 16,
        textAlign: "center"
    }
})