import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={newPassword => setPassword(newPassword)}
        defaultValue={password}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Text>
        {text}
      </Text>
      <Text>
        {password}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
