package com.aditi.jobportal.Controller;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.aditi.jobportal.Model.AddJobModel;
import com.aditi.jobportal.Service.JobService;



@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class JobControllers {

    @Autowired
    private JobService service;

    @GetMapping("/jobs")
    public List<AddJobModel> getAllJobs() {
        return service.getAllJobs();
    }

    @PostMapping("/addJob")
    public String addJob(@RequestBody AddJobModel addJobModel) {
        service.addJobToRep(addJobModel);
        return "Job Added Successfully";
    }

    @GetMapping("/job/{id}")
    public AddJobModel getJob(@PathVariable("id") int id) {
        return service.getJob(id);
    }

    @DeleteMapping("/deleteJob/{id}")
    public String deleteJob(@PathVariable int id) {
        service.deleteJob(id);
        return "Job Deleted Successfully";
    }

    @PutMapping("/updateJob/{id}")
    public String updateJob(@PathVariable int id, @RequestBody AddJobModel addJobModel) {
        service.updateJob(id, addJobModel);
        return "Job Updated Successfully";
    }

    @GetMapping("/job/search/{search}")
    public HashSet<Optional<AddJobModel>> findJob(@PathVariable("search") String search) {
        return service.findJob(search);
    }
}
