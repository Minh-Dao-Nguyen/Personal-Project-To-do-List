package com.minhdao.Backend.Repository;

import com.minhdao.Backend.Model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<Customer, String> {
}
