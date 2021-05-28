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

function ListItem({ deleteHandler, todoItem, setIsopened, isOpened }) {
  console.log("isOpened", isOpened);
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemView}>
        <View>
          <Text style={styles.listText}>{todoItem.name}</Text>
          <View>
            <TextInput
              style={styles.input}
              /*  onChangeText={onChangeHandler} */
              /* value={inputText} */
              placeholder="Change"
            />
          </View>
        </View>
        <View>
          <Icon
            name="pencil"
            size={20}
            color="grey"
            onPress={() => setIsopened(!isOpened)}
          />
        </View>
        <View>
          <Icon
            name="remove"
            size={20}
            color="firebrick"
            onPress={() => deleteHandler(todoItem.id)}
          />
        </View>
      </View>
    </View>
  );
}

export default ListItem;
