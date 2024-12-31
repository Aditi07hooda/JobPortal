import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Jobs = () => {
  const [state, setState] = useState({
    jobs: [],
  });

  const fetchingJobs = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const res = await fetch("http://192.168.0.134:8080/jobs",{
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      return [];
    }
  };

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchingJobs();
      setState((prev) => ({
        ...prev,
        jobs: data,
      }));
    };
    loadJobs();
  }, []);

  return (
    <SafeAreaView className="h-full bg-blue-100">
      <View className="flex justify-center items-center my-5">
        <View className="bg-blue-100 p-4 shadow-md">
          <Text className="text-3xl font-bold text-blue-900 text-center">
            Available Jobs
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            Explore exciting opportunities tailored to your skills.
          </Text>
        </View>
        <FlatList
          className="flex gap-4 h-full py-4 px-5"
          data={state.jobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <JobCard job={item} />}
          ListEmptyComponent={() => (
            <View className="bg-blue-100 p-4 shadow-md">
              <Text className="text-gray-500 text-center mt-2">
                Sorry!! Currently No Jobs are Available.
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Jobs;
