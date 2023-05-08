import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useGetWeather } from "./hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App = ({}) => {
  const [loading, error, weather] = useGetWeather();

  console.log(weather);
  console.log(error);

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
