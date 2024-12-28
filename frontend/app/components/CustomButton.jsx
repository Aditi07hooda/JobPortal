import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ text, onPress, style, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} className={`${style}`} disabled={disabled}>
      <View className="bg-indigo-300 py-2 px-4 rounded-lg">
        <Text className="font-semibold text-base">{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
