import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { dp } from "../utils";

export default function ProfileButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Image
          source={require("../assets/profile_image.png")}
          style={{
            width: 60,
            height: 60,
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
    backgroundColor: "#F5F5F5",
    borderRadius: dp(100),
    borderColor: "#DBDBDB",
    borderStyle: "solid",
    borderWidth: dp(1),
    justifyContent: "center",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    marginTop: dp(8),
    marginLeft: dp(0),
    marginBottom: dp(10),
  },
});
