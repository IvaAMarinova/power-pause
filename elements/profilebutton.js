import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

export default function ProfileButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Image 
            source={require("../assets/profile_image.png")}
            style={{
                width: 80,
                height: 80,
                margin: 1
            }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    //backgroundColor: isActive ? "#087E8B" : "#F5F5F5",
    backgroundColor: "#F5F5F5",
    borderRadius: 100,
    borderColor: "#DBDBDB", //#3C3C3C
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 8,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    marginLeft: 1810,
  },
});
