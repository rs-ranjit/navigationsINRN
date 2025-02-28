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
