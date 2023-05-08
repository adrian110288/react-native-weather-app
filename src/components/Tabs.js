import { StyleSheet, View, Text } from "react-native";
import CurrentWeather from "../screens/CurrentWeather";
import { Feather } from "@expo/vector-icons";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "lightblue",
        },
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          color: "tomato",
        },
      }}
    >
      <Tab.Screen
        name="Current Weather"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={24}
              color={focused ? "tomato" : "gray"}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="Upcoming Weather"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={24}
              color={focused ? "tomato" : "gray"}
            />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "tomato" : "gray"}
            />
          ),
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

export default Tabs;
