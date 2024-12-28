import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="h-full bg-blue-100">
      <View className="flex justify-center items-center m-5 h-[85%]">
        <Text className="text-2xl font-bold">Profile</Text>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
