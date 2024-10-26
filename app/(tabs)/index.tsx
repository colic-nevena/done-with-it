import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import Card from '@/components/Card'
import { ListingViewModel } from '@/model/ListingViewModel'
import { Routes } from '@/constants/Routes'
import AppText from '@/components/AppText'
import { getListings } from '@/api/listings'
import ActivityIndicator from '@/components/ActivityIndicator'
import useApi from '@/hooks/useApi'

export default function ListingsScreen() {
  const { request: loadListings, data: listings, error, loading } = useApi<ListingViewModel[]>(getListings);

  useEffect(() => {
    loadListings()
  }, [])

  if (!listings) return <SafeAreaView><AppText text='NOOO DATAAA' /></SafeAreaView>
  if (error) return <SafeAreaView><AppText text={error} /></SafeAreaView>

  return (
    <SafeAreaView style={styles.screen}>
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing: ListingViewModel) => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
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
