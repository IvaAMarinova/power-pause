import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { sp, dp } from "../utils";

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
    paddingHorizontal: dp(5),
    paddingVertical: dp(5),
    //backgroundColor: isActive ? "#087E8B" : "#F5F5F5",
    backgroundColor: "#F5F5F5",
    borderRadius: dp(100),
    borderColor: "#DBDBDB", //#3C3C3C
    borderStyle: "solid",
    borderWidth: dp(1),
    justifyContent: "center",
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    marginTop: dp(8),
    marginLeft: dp(1810),
  },
});
