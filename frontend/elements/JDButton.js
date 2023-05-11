import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { dp } from "../utils";
import { Image } from "react-native";

export default function JDButton({ text, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require(`../assets/JUSTDRIVE_circle.png`)}
            style={styles.button}
          />
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      paddingHorizontal: dp(10),
      paddingVertical: dp(5),
      backgroundColor: "#F5F5F5",
      borderRadius: dp(10),
      borderWidth: dp(1),
      justifyContent: "center",
      alignItems: "center", 
      width: dp(400),
      height: dp(400), 
      marginTop: dp(800),
      shadowColor: "rgba(0,0,0, .4)", 
      shadowOffset: { height: 1, width: 1 }, 
      shadowOpacity: 1, 
      shadowRadius: 1, 
      elevation: 2, 
    },
  });