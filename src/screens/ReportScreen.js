import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ReportScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Find Me App</Text>
        <Text style={styles.subtitle}>What do you want to report?</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("FormReport", {
            type: "lost",
          });
        }}
      >
        <Text style={styles.text}>
          I am with a dependent that has been separated from their family
        </Text>
      </TouchableOpacity>
      <Text>Or</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("FormReport", {
            type: "missing",
          });
        }}
      >
        <Text style={styles.text}>
          I have been separated from my child/dependent
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "blue",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#333",
    textAlign: "center",
  },
});
