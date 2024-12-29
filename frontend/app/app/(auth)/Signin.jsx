import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomForm from "../../components/CustomForm";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const Signin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const signIn = () => {
    router.replace("/(tabs)/Home");
  }

  return (
    <SafeAreaView className="h-full bg-blue-100">
      <View className="flex justify-center align-middle items-center h-[84%]">
        <View>
          <Text className="text-3xl font-bold text-center text-gray-800">
            Sign In
          </Text>
          <Text className="text-base text-gray-600 text-center mt-1">
            Enter your credentials to explore the jobs!!
          </Text>
        </View>
        <View className="flex w-full px-6 mt-5">
          <CustomForm
            label="Email Id"
            placeholder="Enter your email id"
            type="email-address"
            value={state.email}
            onChange={(e) => setState((prev) => ({ ...prev, email: e }))}
          />
          <CustomForm
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={state.password}
            onChange={(e) => setState((prev) => ({ ...prev, password: e }))}
          />
        </View>
        <View>
          <CustomButton text="Sign In" style="mt-5" onPress={()=>signIn()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
