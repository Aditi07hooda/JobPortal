import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import availableTechStack from "../assets/AvailableTechStacks";

const MultiSelectDropdown = ({ selectedTechStacks = [], setSelectedTechStacks }) => {
  const [state, setState] = useState({
    techStack: availableTechStack,
    isModalVisible: false,
  });

  const onSelectionChange = (item) => {
    if (selectedTechStacks.includes(item)) {
      setSelectedTechStacks(selectedTechStacks.filter((i) => i !== item));
    } else {
      setSelectedTechStacks([...selectedTechStacks, item]);
    }
  };

  return (
    <View className="my-2">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-gray-700 font-semibold mb-1">
          Select Tech Stacks
        </Text>
      </View>
      <View className="border border-gray-300 p-2 px-4 bg-gray-100 rounded-lg w-full mb-1">
        <TouchableOpacity
          onPress={() =>
            setState((prevState) => ({
              ...prevState,
              isModalVisible: !state.isModalVisible,
            }))
          }
        >
          <View className="flex flex-row justify-between w-full gap-44">
            <Text className="text-gray-400 mb-1">Select Tech Stack</Text>
            <Text className="text-gray-400 mb-1">Click</Text>
          </View>
        </TouchableOpacity>
      </View>

      {state.isModalVisible && (
        <View className="absolute top-16 left-0 right-0 bg-gray-100 shadow-md border rounded-lg z-50 mt-2 border-gray-300">
          <FlatList
            className="max-h-60"
            data={state.techStack}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onSelectionChange(item)}>
                <View className="flex flex-row justify-between border-b py-2 px-4 border-b-gray-300">
                  <Text>{item}</Text>
                  {selectedTechStacks.includes(item) && (
                    <Text className="text-green-500">Selected</Text>
                  )}
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default MultiSelectDropdown;