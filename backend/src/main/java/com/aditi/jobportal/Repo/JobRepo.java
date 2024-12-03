package com.aditi.jobportal.Repo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.aditi.jobportal.Model.AddJobModel;

@Repository
public class JobRepo {

    List<AddJobModel> jobs = new ArrayList<>(
            Arrays.asList(
                    new AddJobModel(1, "Software Engineer", "Java", List.of("Java", "Python"), 10),
                    new AddJobModel(2, "Data Scientist", "Python", List.of("Java", "Python"), 5),
                    new AddJobModel(3, "DevOps Engineer", "AWS", List.of("Java", "Python"), 7),
                    new AddJobModel(4, "Cloud Engineer", "Azure", List.of("Java", "Python"), 1)));

    public List<AddJobModel> getAllJobs() {
        // System.out.println(jobs);
        return jobs;
    }

    public void addJob(AddJobModel addJobModel) {
        jobs.add(addJobModel);
        // System.out.println("all jobs are :" + jobs);
    }

    public AddJobModel getJob(int id) {
        for (AddJobModel job : jobs) {
            if (job.getId() == id) {
                return job;
            }
        }
        return null;
    }

    public void deleteJob(int id) {
        List<AddJobModel> jobsToRemove = new ArrayList<>();

        for (AddJobModel job : jobs) {
            if (job.getId() == id) {
                jobsToRemove.add(job);
            }
        }

        jobs.removeAll(jobsToRemove);
        System.out.println("deleted successfully");
    }

    public void updateJob(int id, AddJobModel addJobModel) {

        for (AddJobModel job : jobs) {
            if (job.getId() == id) {
                job.setJobTitle(addJobModel.getJobTitle() != null ? addJobModel.getJobTitle() : job.getJobTitle());
                job.setJobDescription(addJobModel.getJobDescription() != null ? addJobModel.getJobDescription()
                        : job.getJobDescription());
                job.setExperience(addJobModel.getExperience() != 0 ? addJobModel.getExperience() : job.getExperience());
                job.setTechStack(addJobModel.getTechStack() != null ? addJobModel.getTechStack() : job.getTechStack());
            }
        }
        System.out.println("Updated job successfully");
    }
}
