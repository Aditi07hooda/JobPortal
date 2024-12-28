import { View, Text, TextInput } from "react-native";
import React from "react";

const CustomForm = ({ placeholder, value, onChange, label, type }) => {
  return (
    <View className="w-full mb-4">
      <Text className="text-gray-700 font-semibold mb-1">{label}</Text>
      <TextInput
        className="h-12 w-full px-4 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF" 
        onChangeText={onChange}
        value={value}
        keyboardType={type}
        required
      />
    </View>
  );
};

export default CustomForm;