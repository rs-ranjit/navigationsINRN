import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <TouchableOpacity
        style={styles.button}
        title="Details"
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.text}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    justifyContent: "center",
    flex: 1,
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
