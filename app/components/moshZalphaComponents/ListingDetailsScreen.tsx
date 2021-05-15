import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import colors from '../constants/Colors'
import AppText from './AppText'
import ListItem from "./ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <ImageBackground style={styles.image} source={require("../assets/Supplementary/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/Supplementary/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    // width: "99%",
    width: 400,
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
})
