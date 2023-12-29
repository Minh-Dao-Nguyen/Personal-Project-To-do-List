package com.minhdao.Backend.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Task")
@Data
public class Task {
    @Id
    private String _id;
    private String projectID;
    private String customerID;
    private String name;
    private String description;
    private String status;

    public Task(String projectID, String customerID, String name, String description, String status) {
        this.projectID = projectID;
        this.customerID = customerID;
        this.name = name;
        this.description = description;
        this.status = status;
    }
}
