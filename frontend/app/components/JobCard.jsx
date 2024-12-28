import { View, Text, FlatList } from "react-native";
import React from "react";
import Animated, { FadeIn } from "react-native-reanimated";

const JobCard = ({ job }) => {
  return (
    <Animated.View entering={FadeIn.duration(500)}>
      <View className="bg-white shadow-lg rounded-lg p-6 h-fit my-5">
        <View className="flex flex-row justify-between items-center mb-2">
          <Text className="text-xl font-bold text-blue-700">
            {job.jobTitle}
          </Text>
          <Text className="text-gray-500">Id: {job.id}</Text>
        </View>
        <View>
          <Text className="text-gray-600 mb-4">{job.jobDescription}</Text>
          <Text className="text-sm font-semibold text-gray-500 mb-1">
            Tech Stack:
          </Text>
          <FlatList
            className="flex flex-row flex-wrap gap-2"
            data={job.techStack}
            keyExtractor={(index) => index}
          renderItem={({ item }) => (
              <Text className="text-xs text-white bg-blue-500 px-3 py-1 rounded-full">
                {item}
              </Text>
            )}
          />
          <Text className="text-sm text-gray-700 mt-3">
            <Text className="font-semibold">Experience: </Text>
            {job.experience} years
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default JobCard;