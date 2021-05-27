import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import defaultStyles from "../config/styles";

import AccountScreen from './compScreens/AccountScreen';
import AppCard from '../components/AppCard';
import AppIcon from '../components/AppIcon';
import AppPicker from '../components/AppPicker';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import ImageInput from '../components/ImageInput';
// import EditScreenInfo from '../components/EditScreenInfo';
import ListItem from "../components/lists/ListItem";
import ListingDetailsScreen from './compScreens/ListingDetailsScreen';
import ListingEditScreen from './compScreens/ListingEditScreen';
import ListingsScreen from './compScreens/ListingsScreen';
import LoginScreen from './compScreens/LoginScreen';
import MessageScreen from './compScreens/MessagesScreen';
import ViewImageScreen from './compScreens/ViewImageScreen';
import WelcomeScreen from './compScreens/WelcomeScreen';

import { View } from '../components/Themed';

// const imageUri = require('../assets/Supplementary/jacket.jpg')
// import imageUri from '../assets/Supplementary/jacket.jpg';

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function TabOneScreen() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <View style={styles.container}>
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

      {/* <AppPicker
        icon="apps"
        items={categories}
        onSelectItem={(item) => setCategory(item)}
        placeholder="Category"
        selectedItem={category}
      /> */}

      {/* <AppText /> */}

      {/* <AppTextInput
        placeholder="User Email"
        // placeholderTextColor={defaultStyles.colors.danger}
        icon="email"
      /> */}

      {/* <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
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

      {/* <ListingEditScreen /> */}

      {/* <ListingsScreen /> */}

      <LoginScreen />

      {/* <MessageScreen /> */}

      {/* <ViewImageScreen /> */}

      {/* <WelcomeScreen /> */}

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
