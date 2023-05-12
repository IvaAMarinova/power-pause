import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FlatTextInput from "../elements/FlatTextInput";

export default function RegisterScreen({ navigation }) {
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleButtonClick = (buttonNumber) => {
    if (clickedButtons.includes(buttonNumber)) {
      setClickedButtons(clickedButtons.filter((num) => num !== buttonNumber));
    } else {
      setClickedButtons([...clickedButtons, buttonNumber]);
    }
  };

  const isButtonClicked = (buttonNumber) => {
    return clickedButtons.includes(buttonNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.hobbiesContainer}>
        <Text style={styles.hobbiesText}>What are your hobbies?</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => handleButtonClick(1)}>
            <View
              style={[
                styles.buttonHobbie,
                isButtonClicked(1) && styles.clickedButton,
              ]}
            >
              <Text style={styles.buttonText}>Cafe</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonClick(2)}>
            <View
              style={[
                styles.buttonHobbie,
                isButtonClicked(2) && styles.clickedButton,
              ]}
            >
              <Text style={styles.buttonText}>Parks</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonClick(3)}>
            <View
              style={[
                styles.buttonHobbie,
                isButtonClicked(3) && styles.clickedButton,
              ]}
            >
              <Text style={styles.buttonText}>Mall</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => handleButtonClick(4)}>
            <View
              style={[
                styles.buttonHobbie,
                isButtonClicked(4) && styles.clickedButton,
              ]}
            >
              <Text style={styles.buttonText}>Restaurants</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonClick(5)}>
            <View
              style={[
                styles.buttonHobbie,
                isButtonClicked(5) && styles.clickedButton,
              ]}
            >
              <Text style={styles.buttonText}>Books</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonClick(6)}>
            <View
              style={[
                styles.buttonHobbie,
                isButtonClicked(6) && styles.clickedButton,
              ]}
            >
              <Text style={styles.buttonText}>Bars</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <View style={styles.button}>
            <Text style={styles.buttonTextContinue}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  button: {
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    padding: 15,
    width: "130%",
    margin: "2%",
    textAlign: "center",
    fontWeight: "bold",
    borderColor: "#DBDBDB",
    borderWidth: 1,
  },
  buttonHobbie: {
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    padding: 15,
    width: "100%",
    margin: "2%",
    textAlign: "center",
    borderColor: "#DBDBDB",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  clickedButton: {
    backgroundColor: "#4DAA57",
  },
  link: {
    marginTop: 20,
    color: "#087e8b",
  },
  buttonText: {
    textAlign: "center",
    color: "black",
  },
  buttonTextContinue: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  hobbiesContainer: {
    backgroundColor: "#E8E8E8",
    borderRadius: 5,
    padding: 15,
    width: "80%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    alignItems: "center",
    justifyContent: "center",
  },
  hobbiesText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});
