import { View, Text, TouchableOpacity } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useFocusEffect } from "expo-router";
import CustomButton from "../../components/CustomButton";

const Profile = () => {
  const [state, setState] = useState({
    profile: {
      username: "",
      email: "",
      role: "",
    },
  });

  const getProfile = async () => {
    try {
      const email = await AsyncStorage.getItem("email");
      const token = await AsyncStorage.getItem("token");

      const res = await fetch(`http://192.168.0.134:8080/me?email=${email}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        console.error("Error fetching profile", res);
        return;
      }
      const profile = await res.json();

      setState((prev) => ({
        ...prev,
        profile: {
          username: profile.username,
          email: profile.email,
          role: profile.role,
        },
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    setState((prev) => ({
      ...prev,
      profile: {
        username: "",
        email: "",
        role: "",
      },
    }));
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("email");
    router.replace("/(auth)/Signin");
  };

  useFocusEffect(
    useCallback(() => {
      getProfile();
    }, [])
  );

  return (
    <SafeAreaView className="h-full bg-blue-100">
      <View className="flex justify-center items-center m-5 h-[85%]">
        <Text className="text-2xl font-bold">Profile</Text>
        <View className="flex items-center w-full gap-5 mt-9">
          <View className="flex flex-row justify-between w-full border py-2 px-5">
            <Text className="font-semibold text-lg">User Name : </Text>
            <Text className="font-medium text-base">
              {state.profile.username}
            </Text>
          </View>
          <View className="flex flex-row justify-between w-full border py-2 px-5">
            <Text className="font-semibold text-lg">Email ID : </Text>
            <Text className="font-medium text-base">{state.profile.email}</Text>
          </View>
          <View className="flex flex-row justify-between w-full border py-2 px-5">
            <Text className="font-semibold text-lg">Role : </Text>
            <Text className="font-medium text-base">{state.profile.role}</Text>
          </View>
        </View>
        <View>
          <CustomButton text="Logout" style="mt-5" onPress={() => logout()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
