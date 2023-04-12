import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProfileButton from "../elements/profilebutton";
import FlatButton from "../elements/button";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerRight}>
        <ProfileButton onPress={() => navigation.navigate("ProfileScreen")} />
      </View>
      <View style={{flex: 2}}>
        <FlatButton
          text={"JUST DRIVE"}
          onPress={() => navigation.navigate("NewRouteScreen")}
        />
      </View>
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
});
