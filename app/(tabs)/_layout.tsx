import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="flower-tulip"
              size={25}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: "Affirmations",
          tabBarIcon: ({ color }) => (
            <Entypo name="open-book" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
