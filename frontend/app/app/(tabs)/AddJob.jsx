import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomForm from "../../components/CustomForm";
import MultiSelectDropdown from "../../components/MultiSelectDropdown";
import CustomButton from "../../components/CustomButton";

const AddJob = () => {
  const [state, setState] = useState({
    jobId: 0,
    jobTitle: "",
    jobDescription: "",
    selectedTechStacks: [],
    experience: 0,
    success: false,
    error: false,
  });

  const resetForm = () => {
    setState((prev) => ({
      ...prev,
      jobId: 0,
      jobTitle: "",
      jobDescription: "",
      selectedTechStacks: [],
      experience: 0,
      success: false,
      error: false,
    }));
  };

  const addJobToDB = async () => {
    try {
      const res = await fetch(`${process.env.EXPO_BACKEND_API}/addJob`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: state.jobId,
          jobTitle: state.jobTitle,
          jobDescription: state.jobDescription,
          techStack: state.selectedTechStacks,
          experience: state.experience,
        }),
      });
      if (!res.ok) {
        throw new Error(res.status);
      }
      const data = await res.text();
      console.log(data);
      resetForm();
    } catch (error) {
      console.error("error adding job to database", error);
    }
  };

  return (
    <SafeAreaView className="h-full bg-blue-100">
      <View className="flex justify-center items-center m-5 h-[85%]">
        <Text className="text-2xl font-bold">Add Job</Text>
        <View className="w-full">
          <CustomForm
            label="Job ID"
            value={state.jobId}
            placeholder="Enter Job ID"
            type="numeric"
            onChange={(e) => setState((prev) => ({ ...prev, jobId: e }))}
          />
          <CustomForm
            label="Job Title"
            value={state.jobTitle}
            placeholder="Enter Job Title"
            type="default"
            onChange={(e) => setState((prev) => ({ ...prev, jobTitle: e }))}
          />
          <CustomForm
            label="Job Description"
            value={state.jobDescription}
            placeholder="Enter Job Description"
            type="default"
            onChange={(e) =>
              setState((prev) => ({ ...prev, jobDescription: e }))
            }
          />
          <MultiSelectDropdown
            selectedTechStacks={state.selectedTechStacks}
            setSelectedTechStacks={(updatedTechStacks) =>
              setState((prev) => ({
                ...prev,
                selectedTechStacks: updatedTechStacks,
              }))
            }
          />
          <CustomForm
            label="No. of Experience"
            value={state.experience}
            placeholder="Enter required no. of experience"
            type="numeric"
            onChange={(e) => setState((prev) => ({ ...prev, experience: e }))}
          />
        </View>
        <CustomButton
          text="Add Job"
          style="mt-5"
          onPress={addJobToDB}
          disabled={
            state.jobId === 0 ||
            state.jobTitle === "" ||
            state.jobDescription === "" ||
            state.experience === 0 ||
            state.selectedTechStacks == []
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default AddJob;
