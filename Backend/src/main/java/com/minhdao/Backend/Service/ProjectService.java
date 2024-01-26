package com.minhdao.Backend.Service;

import com.minhdao.Backend.Model.Project;
import com.minhdao.Backend.Repository.ProjectRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ProjectService {

    @Autowired
    private final ProjectRepository projectRepository;

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public void addProject(Project project) {
        Project newProject = new Project(
                project.getCustomerID(),
                project.getName(),
                project.getDescription(),
                project.getStatus(),
                project.getSprint(),
                project.getCategory()
                );
        projectRepository.insert(newProject);
    }
}
