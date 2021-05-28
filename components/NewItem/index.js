import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  input: {
    padding: 12,
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    padding: 10,
    fontSize: 25,
    color: "green",
  },
});

function NewItem({
  item,
  addNewItemHandler,
  onChangeHandler,
  inputText,
  isAddMode,
  cancelHandler,
}) {
  return (
    <Modal visible={isAddMode} animationType="slide">
      <View style={styles.wrapper}>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeHandler}
            value={inputText}
            placeholder="Add New Item"
            keyboardType="numeric"
          />
        </View>
        <View></View>
        <Icon
          name="plus"
          onPress={addNewItemHandler.bind(this, inputText)}
          style={styles.icon}
        />
      </View>
      <Button title="Cancel" color="red" onPress={cancelHandler} />
    </Modal>
  );
}

export default NewItem;
