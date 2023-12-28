package com.minhdao.Backend.Controller;

import com.minhdao.Backend.Model.Project;
import com.minhdao.Backend.Service.ProjectService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/projects")
@AllArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    public List<Project> fetchAllProject() {
        return projectService.getAllProjects();
    }
}
