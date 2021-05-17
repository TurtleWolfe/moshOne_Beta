import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import Screen from "./Screen";
// import Constants from "expo-constants";
import ListItem from "./ListItem";
import ListItemSeparator from "./ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/Supplementary/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/Supplementary/Turtlewolfe.png"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen style={styles.zcreen} >
      {/* <View {styles.zcreen} > */}
      <FlatList
        // style={styles.zcreen}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/Supplementary/Turtlewolfe.png"),
            },
          ]);
        }}
      />
      {/* </View> */}
    </Screen>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
  zcreen: {
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
    // backgroundColor: "pink",
    // width: "40%",
    // width: 130,
    // alignItems: 'center',
    // justifyContent: "center",
  },
})
