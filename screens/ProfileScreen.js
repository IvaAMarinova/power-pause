import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View } from "react-native";
import ProfileButton from "../elements/profilebutton";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <ProfileButton></ProfileButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "##F5F5F5",
      alignItems: "center",
      justifyContent: "center",
    },
  });