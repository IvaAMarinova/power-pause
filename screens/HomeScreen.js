import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View } from "react-native";
import ProfileButton from "../elements/profilebutton";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <ProfileButton onPress={() => navigation.navigate("LoginScreen")} />
      </View>
      <Text>Powerpause</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "##F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  containerLeft: {
    flex: 1,
    backgroundColor: "##F5F5F5",
  },
});
