import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  ScrollView,
} from "react-native";
import ProfileButton from "../elements/ProfileButton";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function ProfileScreen() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  try {
    const USER = AsyncStorage.getItem("user").then((user) => {
      console.log(user);
      setFname(JSON.parse(user).FIRST_NAME);
      setLname(JSON.parse(user).LAST_NAME);
    });
  } catch (error) {
    console.log(error);
  }

  return (
    <ScrollView>
      <View style={styles.grayContainer}>
        <Image
          style={styles.profileImage}
          source={require("../assets/hardcoded/pfp_hardcoded.jpg")}
        />
        <Text style={styles.profileName}>{fname} {lname}</Text>
        <Image
          style={styles.carImage}
          source={require("../assets/cars/tesla-car2.png")}
        />

        <Text style={[styles.statsLabel, { textAlign: "center" }]}>
          Kilometers Driven with PowerPause:
        </Text>
        <Text style={[styles.statsValue, { textAlign: "center" }]}>1000</Text>
        <Text style={[styles.statsLabel, { textAlign: "center" }]}>
          Money saved:
        </Text>
        <Text style={[styles.statsValue, { textAlign: "center" }]}>
          1232 lv
        </Text>

        <View style={styles.accomplishmentsContainer}>
          <Image
            style={[styles.accomplishmentImage]}
            source={require("../assets/accomplishments/first_cafe.png")}
          />
          <Image
            style={[styles.accomplishmentImage]}
            source={require("../assets/accomplishments/police.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  grayContainer: {
    backgroundColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 30,
    borderWidth: 2,
    margin: 30,
    borderColor: "#b3b3b3",
  },
  profileImage: {
    width: 150,
    height: 150,
    margin: 1,
    borderRadius: 500,
    borderWidth: 2,
    borderColor: "#b3b3b3",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  profileName: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 2,
    borderRadius: 500,
    borderColor: "#b3b3b3",
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 9,
  },
  carImage: {
    width: 180,
    height: 90,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  statsContainer: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  statsLabel: {
    color: "gray",
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  statsValue: {
    color: "#4daa57",
    fontWeight: "bold",
    fontSize: 18,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  accomplishmentsContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  accomplishmentImage: {
    width: 80,
    height: 80,
    margin: 5,
  },
});
