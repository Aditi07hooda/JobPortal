import React from "react";
import { Stack, Tabs } from "expo-router";
import { Image, View } from "react-native";
import { home, plus, search, profile } from "../../constants/Icons";
import { StatusBar } from "expo-status-bar";

const TabIcon = ({ icon, color }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
    </View>
  );
};
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#a5b4fc",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 54,
            paddingTop: 4,
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: () => {
              return <TabIcon icon={home} color="black" />;
            },
          }}
        />
        <Tabs.Screen
          name="Jobs"
          options={{
            title: "Jobs",
            headerShown: false,
            tabBarIcon: () => {
              return <TabIcon icon={search} color="black" />;
            },
          }}
        />

        <Tabs.Screen
          name="AddJob"
          options={{
            title: "AddJob",
            headerShown: false,
            tabBarIcon: () => {
              return <TabIcon icon={plus} color="black" />;
            },
          }}
        />

        <Tabs.Screen name="Profile" options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: () => {
            return <TabIcon icon={profile} color="black" />;
          }
        }}/>
      </Tabs>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabsLayout;
