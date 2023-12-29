package com.minhdao.Backend.Repository;

import com.minhdao.Backend.Model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<Task, String> {
}
