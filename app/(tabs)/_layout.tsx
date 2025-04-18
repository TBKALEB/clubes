import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: {
            position: "absolute",
            bottom: 20,
            left: 20,
            right: 20,
            borderRadius: 30,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderTopWidth: 0,
            elevation: 0,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 10,
            paddingBottom: 10,
            paddingTop: Platform.select({ web: 10, android: 0 }),
            ...(Platform.OS === "web" && {
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }),
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="LoginScreen"
          options={{
            title: "Login",
            tabBarIcon: ({ color }) => (
              <Ionicons size={28} name="log-in" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="RegisterScreen"
          options={{
            title: "Register",
            tabBarIcon: ({ color }) => (
              <Ionicons size={28} name="person-add" color={color} />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}
