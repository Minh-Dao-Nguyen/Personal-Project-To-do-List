package com.minhdao.Backend.Controller;

import com.minhdao.Backend.Model.Project;
import com.minhdao.Backend.Service.ProjectService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/add")
    public void addProject(@RequestBody Project project) {
        projectService.addProject(project);
    }
}
