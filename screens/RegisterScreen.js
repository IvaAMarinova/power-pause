import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import FlatButton from "../elements/FlatButton";
import FlatTextInput from "../elements/FlatTextInput";

export default function RegisterScreen({ navigation }) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo_nobg.png")}
        style={{
          width: 300,
          height: 300,
          marginBottom: 40,
        }}
      />
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
      <FlatButton
        text="Register"
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Text onPress={() => navigation.pop()}>
        Already have an account?
      </Text>
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
