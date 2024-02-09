package com.example.agrofundx.repository;

import com.example.agrofundx.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DocumentRepo extends JpaRepository<Document,Long> {


    Optional<Document> findByName(String fileName);
}