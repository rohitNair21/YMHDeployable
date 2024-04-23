import { Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Nav({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const buttons = ["Main", "Eileen", "Inga", "Journal"];
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return buttons.includes(label) ? (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <View
              style={{
                padding: 5,
                alignItems: "center",
              }}
            >
              {label === "Main" && (
                <MaterialIcons
                  name="space-dashboard"
                  size={24}
                  color={isFocused ? "green" : "black"}
                />
              )}
              {label === "Eileen" && (
                <MaterialCommunityIcons
                  name="sigma-lower"
                  size={24}
                  color={isFocused ? "green" : "black"}
                />
              )}
              {label === "Inga" && (
                <MaterialCommunityIcons
                  name="beta"
                  size={24}
                  color={isFocused ? "green" : "black"}
                />
              )}
              {label === "Journal" && (
                <MaterialCommunityIcons
                  name="book"
                  size={24}
                  color={isFocused ? "green" : "black"}
                />
              )}
              <Text style={{ color: isFocused ? "green" : "#222" }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={{ display: "none" }}></View>
        );
      })}
    </View>
  );
}
