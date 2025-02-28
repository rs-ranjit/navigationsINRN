import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "purple",
    textAlign: "center",
    fontSize: 40,
  },
});
