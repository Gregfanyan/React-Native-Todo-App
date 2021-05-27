import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  input: {
    padding: 12,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    fontSize: 25,
    color: "green",
    padding: 15,
  },
});

function NewItem({ item, addNewItemHandler, onChangeHandler, inputText }) {

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeHandler}
        value={inputText}
        placeholder="Add New Item"
        keyboardType="numeric"
      />
      <Icon
        name="plus"
        onPress={() => addNewItemHandler(inputText)}
        style={styles.icon}
      />
    </View>
  );
}

export default NewItem;
