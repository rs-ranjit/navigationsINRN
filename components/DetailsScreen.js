import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
    fontSize: wp(4),
  },
  button: {
    backgroundColor: "purple",
    padding: wp(3),
    width: hp(20),
    marginLeft: hp(24),
    marginTop: hp(10),
    borderRadius: 7,
  },
});
