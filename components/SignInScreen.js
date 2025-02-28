import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
      <TextInput
        style={[
          styles.text,
          { borderColor: "white", borderWidth: 2, width: 300, margin: 50 },
        ]}
        placeholder="Email"
      />
      <TextInput
        style={[
          styles.text,
          { borderColor: "white", borderWidth: 2, width: 300, margin: 50 },
        ]}
        placeholder="Password"
      />
    </View>
  );
};

export default SignInScreen;

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
