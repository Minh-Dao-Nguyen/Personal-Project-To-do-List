package com.minhdao.Backend.Service;

import com.minhdao.Backend.Model.Task;
import com.minhdao.Backend.Repository.CustomerRepository;
import com.minhdao.Backend.Repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public List<Task> getAllTask() {
        return taskRepository.findAll();
    }
}
