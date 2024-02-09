package com.example.agrofundx.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.agrofundx.model.Admin;



@Repository
public interface AdminRepo extends JpaRepository<Admin,Long>{
    Optional<Admin> findByEmail(String email);
}
