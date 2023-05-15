import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ProfileButton from "../elements/ProfileButton";
import JDButton from "../elements/JDButton";
import CarVisualized from "../elements/CarVisualized";
//import { ProgressBar } from "react-native-progress";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerRight}>
        <ProfileButton onPress={() => navigation.navigate("ProfileScreen")} />
        <JDButton
          onPress={() => navigation.navigate("DestinationSelectScreen")}
        />
      </View>
      <CarVisualized />
      <View style={{ flex: 4 }}>{/*<ProgressBar progress={0.5} />*/}</View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerRight: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  progressBar: {
    width: "80%",
    marginTop: 20,
  },
});
