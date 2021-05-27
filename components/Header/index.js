import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "darkslateblue",
  },
  text: {
    fontSize: 23,
    color: "#fff",
    textAlign: "center",
  },
});

function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

export default Header;
