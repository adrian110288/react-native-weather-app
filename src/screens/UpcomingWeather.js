import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import Item from "../components/Item";

const UpcomingWeather = ({}) => {
  const data = [
    {
      dt_txt: "2021-03-01",
      main: {
        temp_min: 5,
        temp_max: 10,
      },
      weather: [
        {
          main: "Clouds",
        },
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <Item
      dt_text={item.dt_txt}
      temp_min={item.main.temp_min}
      temp_max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/clouds.jpg")}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
