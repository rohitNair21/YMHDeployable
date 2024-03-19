import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NavigationBar from "./components/NavigationBar";
import Main from "./pages/Main";

const Tab = createBottomTabNavigator();

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}
        sceneContainerStyle={{ backgroundColor: "white" }}
        tabBar={(props) => <NavigationBar {...props} />}
      >
        <Tab.Screen name="Main" component={Main} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}