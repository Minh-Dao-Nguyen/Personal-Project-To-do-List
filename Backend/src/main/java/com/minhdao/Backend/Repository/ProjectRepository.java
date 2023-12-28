package com.minhdao.Backend.Repository;

import com.minhdao.Backend.Model.Project;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface ProjectRepository extends MongoRepository<Project, String> {
}
