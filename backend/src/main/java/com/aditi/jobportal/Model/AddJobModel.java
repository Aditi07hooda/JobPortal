package com.aditi.jobportal.Model;

import java.util.List;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class AddJobModel {
    private int id;
    private String jobTitle;
    private String jobDescription;
    private List<String> techStack;
    private int experience;
}
