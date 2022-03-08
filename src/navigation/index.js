import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReportScreen from "../screens/ReportScreen";
import LoginScreen from "../screens/LoginScreen";
import FormReportScreen from "../screens/FormReportScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Report"
          component={ReportScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FormReport"
          component={FormReportScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
