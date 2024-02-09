package com.example.agrofundx.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.agrofundx.model.LoanApplication;


@Repository
public interface LoanApplicantRepo extends JpaRepository<LoanApplication,Integer>{

}
