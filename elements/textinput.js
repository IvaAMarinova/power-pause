import React from "react";
import { StyleSheet, TextInput } from "react-native";

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
    paddingLeft: 5,
    paddingRight: 20,
    paddingVertical: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    borderColor: "#DBDBDB", //#3C3C3C
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "left",
    marginBottom: 5,
    hadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
});
