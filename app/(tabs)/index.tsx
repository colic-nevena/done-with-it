import Card from '@/components/Card'
import { ListingViewModel } from '@/model/ListingViewModel'
import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'

const listings: ListingViewModel[] = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../../assets/images/jacket.jpg")
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1200,
    image: require("../../assets/images/couch.jpg")
  }
]

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
