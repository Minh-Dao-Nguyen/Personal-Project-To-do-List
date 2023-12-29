package com.minhdao.Backend.Controller;

import com.minhdao.Backend.Model.Task;
import com.minhdao.Backend.Service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/tasks")
@AllArgsConstructor
public class TaskController {

    public final TaskService taskService;

    @GetMapping
    public List<Task> fetchAllTask() {
        return taskService.getAllTask();
    }
}
