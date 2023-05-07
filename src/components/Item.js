import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const Item = ({ dt_text, temp_min, temp_max, condition }) => {
  return (
    <View style={styles.container}>
      <Feather name={"sun"} size={50} color="white" />
      <Text style={styles.date}>{dt_text}</Text>
      <Text style={styles.temp}>{temp_min}</Text>
      <Text style={styles.temp}>{temp_max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 20,
  },
});

export default Item;
