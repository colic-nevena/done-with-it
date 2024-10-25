import React from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import Card from '@/components/Card'
import { ListingViewModel } from '@/model/ListingViewModel'
import { listings } from '@/utils/listingsData'
import { Routes } from '@/constants/Routes'

export default function ListingsScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing: ListingViewModel) => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
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
