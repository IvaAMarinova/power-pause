import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FlatButton from "../elements/FlatButton";
import FlatTextInput from "../elements/FlatTextInput";
import apiClient from "../api/Client";

export var USER;

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await apiClient.post("/login", {
        EMAIL: email,
        PASSWORD: password,
      });
      setUser(JSON.stringify(response.data));
      USER = response.data;
      console.log(USER.FIRST_NAME);
      navigation.navigate("HomeScreen");
      return JSON.stringify(response.data);
    } catch (error) {
      console.log(error.response);
      setErr(error.response.data);
      return 0;
    }
  };

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
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          defaultValue={email}
        />
        <FlatTextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          defaultValue={password}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.red}>{err}</Text>
      <Text
        style={styles.link}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Don't have an account?
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
  red: {
    color: "#F23535",
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});
