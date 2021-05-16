import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

import colors from '../constants/Colors'

export default function AppButton({
  color = "primary",
  onPress = () => console.log("default tapped"),
  title = 'default',
}) {
  return (
    <TouchableOpacity
      style={[styles.button,
      { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})
