import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import defaultStyles from "../config/styles";

import AccountScreen from '../components/AccountScreen';
import AppCard from '../components/AppCard';
import AppIcon from '../components/AppIcon';
import AppText from '../components/AppText';
import AppPicker from '../components/AppPicker';
import AppTextInput from '../components/AppTextInput';
// import EditScreenInfo from '../components/EditScreenInfo';
import ListItem from "../components/ListItem";
import ListingDetailsScreen from '../components/ListingDetailsScreen';
import ListingEditScreen from '../components/ListingEditScreen';
import ListingsScreen from '../components/ListingsScreen';
import LoginScreen from '../components/LoginScreen';

import WelcomeScreen from '../components/WelcomeScreen';

import { View } from '../components/Themed';
import Icon from '../components/moshZalphaComponents/Icon';

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function TabOneScreen() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <AccountScreen /> */}
      {/* <AppCard
        title='Red Jacket'
        subTitle='$100'
        image={require('../assets/Supplementary/jacket.jpg')}
      /> */}
      {/* <AppIcon
        name="email"
        size={50}
        backgroundColor="red"
        iconColor="white"
      /> */}
      {/* <AppText /> */}
      {/* <AppTextInput
        placeholder="User Email"
        // placeholderTextColor={defaultStyles.colors.danger}
        icon="email"
      /> */}
      {/* <AppPicker
        icon="apps"
        items={categories}
        onSelectItem={(item) => setCategory(item)}
        placeholder="Category"
        selectedItem={category}
      /> */}
      {/* <ListItem
        // image={require("../assets/Supplementary/Turtlewolfe.png")}
        title="TurtleWolfe"
        // subTitle="5 Listings"
        IconComponent={
          <AppIcon
          // name='trash-can-outline'
          />
        }
      /> */}
      {/* <ListingDetailsScreen /> */}
      <ListingEditScreen />
      {/* <ListingsScreen /> */}
      {/* <LoginScreen /> */}
      {/* <Text style={styles.title}>Tab One</Text> */}
      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
