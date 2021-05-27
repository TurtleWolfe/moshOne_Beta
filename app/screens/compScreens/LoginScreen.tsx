import React from 'react'
import { KeyboardAvoidingView, Image, StyleSheet, Text, View } from 'react-native'
import * as Yup from "yup";

import Screen from "./Screen";

import { AppForm, AppFormField, AppSubmitButton } from "../../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/Supplementary/logo-red.png")} />
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={40}
        // behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <AppForm
          initialValues={{ email: '', password: '' }}
          onSubmit={values => console.log(values)}
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
          <AppSubmitButton
            title="Login"
          />
        </AppForm>
      </KeyboardAvoidingView>
    </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
})
