import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from './AppText';
import colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNetInfo } from '@react-native-community/netinfo';

interface Props {

}

export default function OfflineNotice({ }: Props) {
    const netInfo = useNetInfo()

    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
        return (
            <SafeAreaView style={styles.container}>
                <AppText text='No Internet Connection' style={styles.text} />
            </SafeAreaView>
        )

    return null
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 50,
        width: "100%",
        position: "absolute",
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: colors.white,
        fontSize: 16,
        marginBottom: 5
    }
})