package com.aditi.jobportal.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aditi.jobportal.Model.AddJobModel;
import com.aditi.jobportal.Repo.JobRepo;

@Service
public class JobService {

    @Autowired
    private JobRepo repo;
    
    public void addJobToRep(AddJobModel addJobModel) {
        repo.addJob(addJobModel);
    }
    
    public List<AddJobModel> getAllJobs(){
        return repo.getAllJobs();
    }

    public AddJobModel getJob(int id){
        return repo.getJob(id);
    }

    public void deleteJob(int id){
        repo.deleteJob(id);
    }

    public void updateJob(int id, AddJobModel addJobModel) {
        repo.updateJob(id, addJobModel);
    }
}
