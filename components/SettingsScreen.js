import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SettingsScreen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
  },
});
