import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HobbiesSelectScreen from "./screens/HobbiesSelectScreen";
import DestinationSelectScreen from "./screens/DestinationSelectScreen";
import NavigationScreen from "./screens/NavigationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="HobbiesSelectScreen"
          component={HobbiesSelectScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DestinationSelectScreen"
          component={DestinationSelectScreen}
          options={{title: "Select Destination"}}
        />
        <Stack.Screen
          name="NavigationScreen"
          component={NavigationScreen}
          options={{title: "Navigation"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
