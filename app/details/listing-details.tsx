import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import colors from '@/constants/Colors'
import AppText from '@/components/AppText'
import ListItem from '@/components/ListItem'
import { getListingById } from '@/utils/listingsData';

export default function ListingDetailsScreen() {
    const { id } = useLocalSearchParams();

    if (!id) return null;

    const listing = getListingById(parseInt(id as string))
    return (
        <View>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} text={listing.title} />
                <AppText style={styles.price} text={`$${listing.price}`} />

                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../../assets/images/mosh.jpg")}
                        title="Mosh Hamedami"
                        subtitle="5 listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 20
    }
})