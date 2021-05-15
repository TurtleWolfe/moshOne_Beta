import React, { FC } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import colors from '../constants/Colors'
import AppText from './AppText'

// interface AppCardProps {
//   title: string;
//   subTitle: string;
//   image: string;
// }

export default function AppCard({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <ImageBackground
        style={styles.image}
        source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    // width: 360,
    width: "90%",

  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    // width: 360,
    // width: "100%",
    height: 200,
    // resizeMode: "cover",
    justifyContent: "center",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
})
