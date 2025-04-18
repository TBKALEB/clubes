import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Text style={styles.subtitle}>
        This is a simple example of a home screen.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 60,
    textAlign: "center",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#ffffff",
  },
});
