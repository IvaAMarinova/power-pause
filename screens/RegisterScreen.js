import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FlatTextInput from "../elements/FlatTextInput";

export default function RegisterScreen({ navigation }) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo_nobg.png")}
        style={{
          width: 150,
          height: 150,
          marginBottom: 40,
        }}
      />
      <View style={styles.inputContainer}>
        <FlatTextInput
          placeholder="First Name"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <FlatTextInput
          placeholder="Last Name"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <FlatTextInput
          placeholder="Email"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <FlatTextInput
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(newPassword) => setPassword(newPassword)}
          defaultValue={password}
        />
        <TouchableOpacity onPress={() => navigation.navigate("HobbiesSelectScreen")}>
          <View style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.link} onPress={() => navigation.pop()}>
        Already have an account?
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
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
  link: {
    marginTop: 20,
    color: "#087e8b",
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  }
});
