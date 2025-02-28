import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
  },
});
