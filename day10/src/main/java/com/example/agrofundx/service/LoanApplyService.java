package com.example.agrofundx.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.agrofundx.model.LoanApplication;
import com.example.agrofundx.repository.LoanApplicantRepo;

@Service
public class LoanApplyService {
        @Autowired
        LoanApplicantRepo repository;

        public boolean addLoan(LoanApplication loanapplicant){
            repository.save(loanapplicant);
            return true;
        }
        public List<LoanApplication> readLoan(){
            return repository.findAll();
        }
}
