package com.minhdao.Backend.Repository;

import com.minhdao.Backend.Model.Project;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRepository extends MongoRepository<Project, String> {
}
