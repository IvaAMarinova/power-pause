import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Constants from 'expo-constants';

export default function BatteryBar() {
  return (
    <View style={styles.container}>
    <Text>
       Your current battery level:
    </Text>
    <View style={styles.progressBar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: "column", //column direction
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
        padding: 8,
      },
    progressBar: {
        height: 20,
        width: '100%',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 20,
        borderRadius: 20,
    },
});