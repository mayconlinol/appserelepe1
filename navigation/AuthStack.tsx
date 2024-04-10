import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Profile from "../src/screens/login/Profile";
import Routes from '../src/routers/index';


const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Routes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
