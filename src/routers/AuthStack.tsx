import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from './index';


const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Routes"
        component={Routes}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
