package com.minhdao.Backend.Controller;

import com.minhdao.Backend.Model.Task;
import com.minhdao.Backend.Service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( "api/v1/tasks")
@AllArgsConstructor
public class TaskController {

    public final TaskService taskService;

    @GetMapping
    public List<Task> fetchAllTask() {
        return taskService.getAllTask();
    }

    @PostMapping( "/changeStatus")
    public void changeTaskStatus(@RequestBody Task task) {
        taskService.changeStatus(task);
    }

    @PostMapping( "/add")
    public void addTask(@RequestBody Task task) { taskService.addTask(task);}
}
