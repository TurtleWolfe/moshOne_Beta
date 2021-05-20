import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
// import * as Yup from "yup";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from './AppTextInput';
// import { AppForm, AppFormField, SubmitButton } from "../components/forms";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(4).label("Password"),
// });

const LoginScreen = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/Supplementary/logo-red.png")} />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        name="email"
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={text => setPassword(text)}
        name="password"
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      <AppButton
        title="Login"
        onPress={() => console.log(email, password)}
      />
      {/* <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm> */}
    </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
})
