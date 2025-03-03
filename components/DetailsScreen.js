import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const DetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>DetailsScreen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.popToTop("Home")}
      >
        <Text style={styles.text}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;

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
    width: 300,
    marginLeft: 60,
    marginTop: 50,
    borderRadius: 7,
  },
});
