import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import CustomForm from "../../components/CustomForm";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Signup() {
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
    role: "",
    error: "",
  });

  const signUp = async () => {
    try {
      const res = await fetch("http://192.168.0.134:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: state.username,
          email: state.email,
          role: state.role,
          password: state.password,
        }),
      });
      const data = await res.text();
      console.log(data);
      
      if (data) {
        await AsyncStorage.setItem("token", data);
        await AsyncStorage.setItem("email", state.email);
        router.replace("/(tabs)/Home");
      }
    } catch (error) {
      console.error("Error signing into the job portal", error);
      setState((prev) => ({
        ...prev,
        error:
          "Error signing into the job portal!! Please enter your correct credential",
      }));
    }
  };

  return (
    <SafeAreaView className="h-full bg-blue-100">
      <View className="flex justify-center align-middle items-center h-[84%]">
        <View>
          <Text className="text-3xl font-bold text-center text-gray-800">
            Sign Up
          </Text>
          <Text className="text-base text-gray-600 text-center mt-1">
            Enter your credentials to explore the jobs!!
          </Text>
        </View>
        <View className="flex w-full px-6 mt-5">
          <CustomForm
            label="Username"
            placeholder="Enter your username"
            value={state.username}
            onChange={(e) => setState((prev) => ({ ...prev, username: e }))}
          />
          <CustomForm
            label="Email Id"
            placeholder="Enter your email id"
            type="email-address"
            value={state.email}
            onChange={(e) => setState((prev) => ({ ...prev, email: e }))}
          />
          <CustomForm
            label="Role"
            placeholder="Enter your role"
            value={state.role}
            onChange={(e) => setState((prev) => ({ ...prev, role: e }))}
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
          <CustomButton text="Sign Up" style="mt-5" onPress={() => signUp()} />
        </View>
        <View className="flex gap-4 flex-row">
          <Text className="text-base text-gray-600 text-center mt-1">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/Signin")}>
            <Text className="text-base text-blue-600 text-center mt-1">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
