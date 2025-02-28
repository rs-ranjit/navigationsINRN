import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
    </View>
  );
};

export default SignInScreen;

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
