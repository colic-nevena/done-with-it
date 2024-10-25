import React, { ReactNode } from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ImageSourcePropType, View, StyleSheet, Image } from 'react-native';
import AppText from './AppText';
import { GestureHandlerRootView, TouchableHighlight } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from '@/constants/Colors';

interface Props {
    title: string;
    subtitle?: string;
    image?: ImageSourcePropType;
    Icon?: React.ReactNode,
    onPress?: () => void;
    renderRightActions?: (progressAnimatedValue: any, dragAnimatedValue: any, swipeable: Swipeable) => ReactNode
}

export default function ListItem({ title, subtitle, image, onPress, renderRightActions, Icon }: Props) {
    return (
        <GestureHandlerRootView style={{ flex: 0 }}>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight onPress={onPress} underlayColor={colors.white}>

                    <View style={styles.container}>
                        {Icon}

                        {image && <Image source={image} style={styles.image} />}

                        <View style={styles.detailsContainer}>
                            <AppText numberOfLines={1} style={styles.title} text={title} />
                            {subtitle && <AppText numberOfLines={2} style={styles.subtitle} text={subtitle} />}
                        </View>

                        <MaterialCommunityIcons color={colors.mediumGrey} name="chevron-right" size={25} />
                    </View>

                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        marginLeft: 5,
        justifyContent: "center"
    },
    container: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.white,
        alignItems: "center",

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "500",
        fontSize: 16
    },
    subtitle: {
        color: colors.mediumGrey,
    }
})