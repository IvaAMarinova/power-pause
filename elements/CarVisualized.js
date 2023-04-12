import React from "react";
import { StyleSheet, Image } from "react-native";

export default function JDButton() {
  return (
    <Image
      source={require("../assets/cars/tesla-car2.png")}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 100,
    alignSelf: "center", 
  },
});