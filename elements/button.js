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
    borderRadius: 16,
    borderColor: "#DBDBDB", //#3C3C3C
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 10,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  buttonText: {
    fontFamily: "Arial",
    fontSize: 30,
  },
});
