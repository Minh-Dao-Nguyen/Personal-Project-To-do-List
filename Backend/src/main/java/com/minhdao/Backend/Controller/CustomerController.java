package com.minhdao.Backend.Controller;

import com.minhdao.Backend.Model.Customer;
import com.minhdao.Backend.Service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/customers")
@AllArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    @GetMapping
    public List<Customer> fetchAllCustomer() {
        return customerService.getAllCustomer();
    }

    @PostMapping("/add")
    public void addCustomer(@RequestBody Customer customer) {
        customerService.addCustomer(customer);
    }

}
