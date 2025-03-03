import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
    fontSize: wp(6),
  },
  button: {
    backgroundColor: "purple",
    padding: wp(3),
    width: hp(20),
    marginLeft: hp(40),
    marginTop: hp(10),
    borderRadius: 7,
  },
});
