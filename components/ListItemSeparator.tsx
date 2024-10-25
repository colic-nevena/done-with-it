import colors from '@/constants/Colors'
import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function ListItemSeparator() {
    return <View style={styles.separator} />
}

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: colors.lightGrey
    }
})
