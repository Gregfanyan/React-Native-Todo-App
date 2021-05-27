import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listText: {
    fontSize: 17,
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

function ListItem({ item, deleteHandler }) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listText}>{item.name}</Text>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteHandler(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
}

export default ListItem;
