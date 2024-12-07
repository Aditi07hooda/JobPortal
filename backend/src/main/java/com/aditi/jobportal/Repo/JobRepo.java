package com.aditi.jobportal.Repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.aditi.jobportal.Model.AddJobModel;

@Repository
public interface JobRepo extends JpaRepository<AddJobModel, Integer> {

    @Query("SELECT job FROM AddJobModel job WHERE job.jobTitle ILIKE %:keyword%")
    List<Optional<AddJobModel>> findByJobTitle(String keyword);

    @Query("SELECT job FROM AddJobModel job WHERE job.jobDescription ILIKE %:description%")
    List<Optional<AddJobModel>> findByJobDescription(String description);

    List<Optional<AddJobModel>> findByExperience(int experience);

    @Query(value = "SELECT * FROM add_job_model WHERE EXISTS (SELECT 1 FROM UNNEST(tech_stack) AS tech WHERE tech ILIKE %:stack%)", nativeQuery = true)
    List<Optional<AddJobModel>> findByTechStack(String stack);
}