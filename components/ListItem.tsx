import React, { ReactNode } from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ImageSourcePropType, View, StyleSheet, Image } from 'react-native';
import AppText from './AppText';
import { GestureHandlerRootView, TouchableHighlight } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from '@/constants/Colors';

interface Props {
    title: string;
    subtitle: string;
    image: ImageSourcePropType;
    onPress?: () => void;
    renderRightActions?: (progressAnimatedValue: any, dragAnimatedValue: any, swipeable: Swipeable) => ReactNode
}

export default function ListItem({ title, subtitle, image, onPress, renderRightActions }: Props) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight onPress={onPress} underlayColor={colors.white}>

                    <View style={styles.container}>
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
        marginLeft: 10,
        justifyContent: "center"
    },
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
        alignItems: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "500"
    },
    subtitle: {
        color: colors.mediumGrey
    }
})