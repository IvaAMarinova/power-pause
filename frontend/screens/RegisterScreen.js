import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FlatTextInput from "../elements/FlatTextInput";
import apiClient from "../api/Client";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function RegisterScreen({ navigation }) {
  const [user, setUser] = useState(0);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await apiClient.post("/register", {
        FIRST_NAME: fname,
        LAST_NAME: lname,
        EMAIL: email,
        PASSWORD: password,
      });
      AsyncStorage.setItem("user", JSON.stringify(response.data));
      setUser(JSON.stringify(response.data));
      navigation.navigate("HobbiesSelectScreen");
      return response.data;
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
          placeholder="First Name"
          onChangeText={(fname) => setFname(fname)}
          defaultValue={fname}
        />
        <FlatTextInput
          placeholder="Last Name"
          onChangeText={(lname) => setLname(lname)}
          defaultValue={lname}
        />
        <FlatTextInput
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          defaultValue={email}
        />
        <FlatTextInput
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          defaultValue={password}
        />
        <TouchableOpacity
          onPress={handleSubmit}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.red}> {err} </Text>
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
  red: {
    color: "#F23535",
  },
  link: {
    marginTop: 20,
    color: "#087e8b",
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});
