package com.example.agrofundx.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.agrofundx.model.LoanApplication;
import com.example.agrofundx.service.LoanApplyService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class LoanController {

    @Autowired
    LoanApplyService service;

    @PostMapping("/apply")
    public boolean add(@RequestBody LoanApplication loanapplicant) {
        
        return service.addLoan(loanapplicant);
    }

    @GetMapping("/get")
    public List<LoanApplication> read() {
        return service.readLoan();
    }
    
    
}
