package com.minhdao.Backend.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Project")
@Data
public class Project {
    @Id
    private String _id;
    private String customerID;
    private String name;
    private String description;
    private String status;
    private int sprint;
    private String category;

    public Project(String customerID,
                   String name,
                   String description,
                   String status,
                   int sprint,
                   String category) {
        this.customerID = customerID;
        this.name = name;
        this.description = description;
        this.status = status;
        this.sprint = sprint;
        this.category = category;
    }
}
