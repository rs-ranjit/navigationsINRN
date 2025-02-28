import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const ProfileScree = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScree</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default ProfileScree;

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
