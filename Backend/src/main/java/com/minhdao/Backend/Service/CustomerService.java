package com.minhdao.Backend.Service;

import com.minhdao.Backend.Model.Customer;
import com.minhdao.Backend.Repository.CustomerRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class CustomerService {

    @Autowired
    private final CustomerRepository customerRepository;

    public List<Customer> getAllCustomer() {
        return customerRepository.findAll();
    }

    public void addCustomer(Customer customer) {
        Customer newCustomer = new Customer(
                customer.getName()
        );
        customerRepository.insert(newCustomer);
    }
}
