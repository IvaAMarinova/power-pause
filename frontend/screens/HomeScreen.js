import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ProfileButton from "../elements/ProfileButton";
import JDButton from "../elements/JDButton";
import CarVisualized from "../elements/CarVisualized";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  useEffect(() => {
    retrieveUser();
  }, []);

  const retrieveUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user !== null) {
        const parsedUser = JSON.parse(user);
        setFname(parsedUser.FIRST_NAME);
        setLname(parsedUser.LAST_NAME);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerRight}>
        <ProfileButton onPress={() => navigation.navigate("ProfileScreen")} />
      </View>
      <View style={styles.carAndProgressBar}>
        <CarVisualized />
      </View>
      <Text style={styles.welcomeText}>
        Welcome, {fname} {lname}!
      </Text>
      <View style={styles.carAndProgressBar}>
        <Image
          source={require("../assets/progress-bar.png")}
          style={styles.progressBar}
        />
      </View>
      <View style={styles.grayContainer}>
        <Text style={styles.infoText}>
          Kilometers left:{" "}
          <Text style={styles.highlightTextGreen}>100</Text>
        </Text>
        <Text style={styles.infoText}>
          Current temperature:{" "}
          <Text style={styles.highlightTextYellow}>20°C</Text>
        </Text>
        <Text style={styles.infoText}>
          Current state:{" "}
          <Text style={styles.highlightTextBlue}>Charging</Text>
        </Text>
        <Text style={styles.infoText}>
        {"\n"}
          Stay alert, focused, and drive safely to ensure a secure journey for
          yourself and others on the road.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <JDButton
          onPress={() => navigation.navigate("DestinationSelectScreen")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerRight: {
    marginTop: 60,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  carAndProgressBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  progressBar: {
    width: "60%",
    height: 35,
    marginLeft: 10,
  },
  buttonContainer: {
    flex: 3,
  },
  grayContainer: {
    backgroundColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 15,
    margin: 20,
    borderColor: "darkgray",
    borderWidth: 1,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  infoText: {
    fontSize: 17,
    marginBottom: 5,
    textAlign: "center",
  },
  highlightTextGreen: {
    color: "#4DAA57",
    fontWeight: "bold",
  },
  highlightTextYellow: {
    color: "#F6AE2D",
    fontWeight: "bold",
  },
  highlightTextBlue: {
    color: "#087E8B",
    fontWeight: "bold",
  },
});
