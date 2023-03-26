import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import FlatButton from "../elements/button";

export default function LoginScreen({ navigation }) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={(newPassword) => setPassword(newPassword)}
        defaultValue={password}
      />
      <FlatButton
        text="Login"
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Text>{text}</Text>
      <Text>{password}</Text>
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
});
