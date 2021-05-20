import * as React from 'react';
import { StyleSheet } from 'react-native';

import AccountScreen from '../components/AccountScreen';
import AppCard from '../components/AppCard';
import AppIcon from '../components/AppIcon';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
// import EditScreenInfo from '../components/EditScreenInfo';
import ListItem from "../components/ListItem";
import ListingDetailsScreen from '../components/ListingDetailsScreen';
import ListingsScreen from '../components/ListingsScreen';

import WelcomeScreen from '../components/WelcomeScreen';

import { View } from '../components/Themed';
import Icon from '../components/moshZalphaComponents/Icon';

export default function TabOneScreen() {
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
      <AppTextInput
        placeholder="User Email"
        icon="email"
      />
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
      {/* <ListingsScreen /> */}
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
