import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  const [outputText, setOututText] = useState(false);

  const changeTextHandleClick = () => {
    setOututText(!outputText);
  };

  return (
    <View style={styles.container}>
      <Text>{outputText ? "Text Changed!" : ""}</Text>
      <Button title="Change Text" onPress={changeTextHandleClick} />
      <StatusBar style="auto" />
    </View>
  );
}
