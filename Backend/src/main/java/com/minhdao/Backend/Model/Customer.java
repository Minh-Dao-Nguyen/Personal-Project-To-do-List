package com.minhdao.Backend.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Customer")
@Data
public class Customer {
    @Id
    private String _id;
    private String name;

    public Customer(String name) {
        this.name = name;
    }
}
