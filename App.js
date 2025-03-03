import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./components/ProfileScreen";
import SettingsScreen from "./components/SettingsScreen";
import HomeStack from "./components/HomeStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignUpScreen from "./components/SignUpScreen";
import SignInScreen from "./components/SignInScreen";
import "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Tabs = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const AboutTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "purple",
        tabBarLabelPosition: "beside-icon",
        // tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={wp(3)} color={color} />
          ),
          tabBarLabelStyle: { fontSize: wp(3) },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={wp(3)} color={color} />
          ),
          tabBarLabelStyle: { fontSize: wp(3) },
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={wp(3)} color={color} />
          ),
          tabBarLabelStyle: { fontSize: wp(3) },
        }}
      />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={styles.screenOptions}
      >
        <Drawer.Screen
          name="Home"
          component={AboutTabs}
          options={styles.Home}
        />
        <Drawer.Screen
          name="Sign Up"
          component={SignUpScreen}
          options={styles.drawerLabel}
        />
        <Drawer.Screen
          name="Sign In"
          component={SignInScreen}
          options={styles.drawerLabel}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  screenOptions: {
    drawerContentStyle: { backgroundColor: "lavender" },
    drawerLabelStyle: {
      fontSize: hp(2),
      paddingTop: wp(4),
      paddingBottom: wp(2),
      textAlign: "center",
    },
    drawerActiveTintColor: "grey",
  },
  Home: {
    title: "Main",
    drawerLabel: "Home",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontSize: hp(2),
    },
  },
  drawerLabel: {
    headerTitleAlign: "center",
    headerTitleStyle: { fontSize: hp(2) },
  },
});
