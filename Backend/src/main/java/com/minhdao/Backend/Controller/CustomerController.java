package com.minhdao.Backend.Controller;

import com.minhdao.Backend.Model.Customer;
import com.minhdao.Backend.Service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
