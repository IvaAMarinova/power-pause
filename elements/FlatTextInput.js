import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { sp, dp } from "../utils";

export default function FlatTextInput({
  secureTextEntry,
  placeholder,
  onChangeText,
  defaultValue,
  keyboardType,
}) {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      onChangeText={onChangeText}
      defaultValue={defaultValue}
      keyboardType={keyboardType}
      style={styles.textInput}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    paddingLeft: dp(5),
    paddingRight: dp(20),
    paddingVertical: dp(16),
    backgroundColor: "#F5F5F5",
    borderRadius: dp(15),
    borderColor: "#DBDBDB",
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    marginBottom: dp(5),
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
});
