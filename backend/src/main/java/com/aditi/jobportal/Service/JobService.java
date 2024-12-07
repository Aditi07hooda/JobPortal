package com.aditi.jobportal.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aditi.jobportal.Model.AddJobModel;
import com.aditi.jobportal.Repo.JobRepo;

@Service
public class JobService {

    @Autowired
    private JobRepo repo;

    public void addJobToRep(AddJobModel addJobModel) {
        repo.save(addJobModel);
    }

    public List<AddJobModel> getAllJobs() {
        return repo.findAll();
    }

    public Optional<AddJobModel> getJob(int id) {
        return repo.findById(id);
    }

    public void deleteJob(int id) {
        repo.deleteById(id);
    }

    public void updateJob(int id, AddJobModel addJobModel) {
        repo.save(addJobModel);
    }

    public HashSet<Optional<AddJobModel>> findJob(String search) {
        HashSet<Optional<AddJobModel>> jobsSet = new HashSet<>();

        if (checkIsStringInteger(search)) {
            List<Optional<AddJobModel>> byExperience = repo.findByExperience(Integer.parseInt(search));
            jobsSet.addAll(byExperience);
        }

        List<Optional<AddJobModel>> byJobTitle = repo.findByJobTitle(search);
        List<Optional<AddJobModel>> byJobDescription = repo.findByJobDescription(search);
        List<Optional<AddJobModel>> byTechStack = repo.findByTechStack(search);
        jobsSet.addAll(byJobTitle);
        jobsSet.addAll(byJobDescription);
        jobsSet.addAll(byTechStack);

        System.out.println("jobs by search: " + jobsSet);
        return jobsSet;
    }

    boolean checkIsStringInteger(String search) {
        try {
            Integer.parseInt(search);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }
}
