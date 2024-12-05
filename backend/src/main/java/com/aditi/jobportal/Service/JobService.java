package com.aditi.jobportal.Service;

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
    
    public List<AddJobModel> getAllJobs(){
        return repo.findAll();
    }

    public Optional<AddJobModel> getJob(int id){
        return repo.findById(id);
    }

    public void deleteJob(int id){
        repo.deleteById(id);
    }

    public void updateJob(int id, AddJobModel addJobModel) {
        repo.save(addJobModel);
    }
}
