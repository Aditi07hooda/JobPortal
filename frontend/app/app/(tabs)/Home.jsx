import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-blue-100">
      <View className="h-[85%] flex flex-col justify-center items-center m-5">
        <View className="flex flex-row gap-4">
          <TouchableOpacity onPress={() => router.push("/(tabs)/Jobs")}>
            <View className="border px-4 py-1 rounded-md bg-indigo-300">
              <Text className="text-xl font-bold font-serif text-center">
                All Jobs
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(tabs)/AddJob")}>
            <View className="border px-4 py-1 rounded-md bg-indigo-300">
              <Text className="text-xl font-bold font-serif text-center">
                Add Job
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
