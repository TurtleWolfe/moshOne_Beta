import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import colors from "../../constants/Colors";
import AppText from "./AppText";

const ListItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    // backgroundColor: colors.primary,
    backgroundColor: "yellow",
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontFamily: "CharterBoldItalic",
    fontWeight: "600",
    // fontWeight: "bold",
  },
})
