import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NavigationBar from "./components/NavigationBar";
import Main from "./pages/Main";
import Eileen from "./pages/Eileen";
import Inga from "./pages/Inga";
import Journal from "./pages/Journal";

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
        <Tab.Screen name="Eileen" component={Eileen} />
        <Tab.Screen name="Inga" component={Inga} />
        <Tab.Screen name="Journal" component={Journal} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
