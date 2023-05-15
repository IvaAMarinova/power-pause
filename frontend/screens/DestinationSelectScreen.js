import React from "react";
import { useState, useEffect } from "react";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import FlatTextInput from "../elements/FlatTextInput";
import * as Location from "expo-location";

export default function DestinationSelectScreen({ navigation }) {
  const [userPin, setUserPin] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [destinationPin, setDestinationPin] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [destination, setDestination] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const geocode = async () => {
    const geocodedLocation = await Location.geocodeAsync(destination);
    setDestinationPin({
      latitude: geocodedLocation[0].latitude,
      longitude: geocodedLocation[0].longitude,
    });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setUserPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <FlatTextInput
          style={styles.input}
          defaultValue={destination}
          onChangeText={setDestination}
        />
        <TouchableOpacity onPress={geocode}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Set destination</Text>
          </View>
        </TouchableOpacity>
      </View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        onUserLocationChange={(e) => {
          setUserPin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
        }}
      >
        <Marker coordinate={userPin} pinColor="green" />
        <Marker coordinate={destinationPin} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "84%",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
    borderColor: "#DBDBDB",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    borderColor: "#DBDBDB",
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});
