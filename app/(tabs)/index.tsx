import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import Card from '@/components/Card'
import { ListingViewModel } from '@/model/ListingViewModel'
import { Routes } from '@/constants/Routes'
import AppText from '@/components/AppText'
import { getListings } from '@/api/listings'

export default function ListingsScreen() {
  const [listings, setListings] = useState<ListingViewModel[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    loadListings()
  }, [])

  const loadListings = async () => {
    const listings = await getListings();

    if (listings.status === "success") {
      setListings(listings.data)
    } else {
      setError(listings.data)
    }
  };

  if (!listings) return <SafeAreaView><AppText text='NOOO DATAAA' /></SafeAreaView>
  if (error) return <SafeAreaView><AppText text={error} /></SafeAreaView>

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing: ListingViewModel) => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0]?.url || "https://picsum.photos/200/300"}
            href={{
              pathname: Routes.LISTING_DETAILS,
              params: { id: item.id.toString() }
            }}
          />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    marginVertical: 30
  }
})
