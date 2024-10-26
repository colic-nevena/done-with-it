import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import AppText from './AppText';
import colors from '@/constants/Colors';
import { Href, Link } from 'expo-router';
import { Image } from "react-native-expo-image-cache"

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL

interface Props {
    title: string;
    subtitle: string;
    href: Href;
    imageUrl: string;
    thumbnailUrl: string;
}

export default function Card({ title, subtitle, imageUrl, href, thumbnailUrl }: Props) {
    return (
        <Link href={href} asChild>
            <Pressable>
                <View style={styles.card}>

                    <Image
                        style={styles.image}
                        uri={imageUrl}
                        tint='light'
                        preview={{ uri: thumbnailUrl }}
                    />

                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} text={title} />
                        <AppText style={styles.subtitle} text={subtitle} />
                    </View>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 7
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})