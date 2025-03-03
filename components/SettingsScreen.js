import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SettingsScreen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    width: 200,
    marginLeft: 100,
    marginTop: 50,
    borderRadius: 7,
  },
});
