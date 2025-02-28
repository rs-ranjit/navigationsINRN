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

const Tabs = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const AboutTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "purple",
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={20} color={color} />
          ),
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
        screenOptions={{ drawerActiveTintColor: "purple" }}
      >
        <Drawer.Screen name="Home" component={AboutTabs} />
        <Drawer.Screen name="Sign Up" component={SignUpScreen} />
        <Drawer.Screen name="Sign In" component={SignInScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
