import React from 'react'
// import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
    // backgroundColor: "pink",
    width: "100%",
    // width: 200,
  },
  view: {
    flex: 1,
  },
})
