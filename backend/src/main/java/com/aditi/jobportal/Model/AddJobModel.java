package com.aditi.jobportal.Model;

import java.util.List;

import org.springframework.stereotype.Component;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
@Entity
public class AddJobModel {
    @Id
    private int id;
    private String jobTitle;
    private String jobDescription;
    private List<String> techStack;
    private int experience;
}