package com.aditi.jobportal.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aditi.jobportal.Model.AddJobModel;

@Repository
public interface JobRepo extends JpaRepository<AddJobModel, Integer> {

}
