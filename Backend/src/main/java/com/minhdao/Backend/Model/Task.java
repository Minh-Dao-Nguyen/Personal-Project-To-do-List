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

    public String get_id() {
        return _id;
    }

    public String getProjectID() {
        return projectID;
    }

    public String getCustomerID() {
        return customerID;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getStatus() {
        return status;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public void setProjectID(String projectID) {
        this.projectID = projectID;
    }

    public void setCustomerID(String customerID) {
        this.customerID = customerID;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
