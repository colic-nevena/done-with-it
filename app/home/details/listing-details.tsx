import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import colors from '@/constants/Colors';
import AppText from '@/components/AppText';
import ListItem from '@/components/ListItem';
import { getListingById } from '@/api/listings';
import { ListingViewModel } from '@/model/ListingViewModel';
import { Image } from "react-native-expo-image-cache"

export default function ListingDetailsScreen() {
    const { id } = useLocalSearchParams();
    const [listing, setListing] = useState<ListingViewModel>()
    const [error, setError] = useState("")

    if (!id) return null;

    useEffect(() => {
        loadListing()
    }, [])

    const loadListing = async () => {
        const result = await getListingById(parseInt(id as string));

        if (result.status === "success") {
            setListing(result.data)
        } else {
            setError(result.data)
        }
    };

    if (error) return <SafeAreaView><AppText text={error} /></SafeAreaView>
    if (!listing) return <AppText text="Listing not found" />;

    return (
        <View>
            <Image style={styles.image} uri={listing.images[0].url} preview={{ uri: listing.images[0].thumbnailUrl }} tint="light" />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} text={listing.title} />
                <AppText style={styles.price} text={`$${listing.price}`} />
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../../../assets/images/mosh.jpg")}
                        title="Mosh Hamedani"
                        subtitle="5 listings"
                    />
                </View>
            </View >
        </View >
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 20,
    },
});
