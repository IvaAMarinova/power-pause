import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 50,
    paddingVertical: 16,
    //backgroundColor: isActive ? "#087E8B" : "#F5F5F5",
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    borderColor: "#3C3C3C",
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    fontFamily: "Arial",
    fontSize: 30,
  },
});
