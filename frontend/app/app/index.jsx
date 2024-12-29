import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const index = () => {
  return (
    <SafeAreaView className="h-full bg-blue-100">
      <View className="flex flex-col justify-center items-center m-5 align-middle h-[80%]">
        <Text className="text-[45px] underline decoration-double underline-offset-4 font-extrabold font-serif">
          Job Portal
        </Text>
        <Text className="font-semibold mt-1">
          Find your dream job here at our Job Portal !!
        </Text>
        <View className="mt-12 mx-7 items-center flex justify-center">
          <TouchableOpacity onPress={() => router.replace("/(auth)/Signin")}>
            <View className="border px-4 py-1 rounded-md w-full bg-indigo-300">
              <Text className="text-2xl font-black font-serif text-center">
                Join
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default index;
