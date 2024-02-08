package com.example.agrofundx.service;

import com.example.agrofundx.model.Document;
import com.example.agrofundx.repository.DocumentRepo;
import com.example.agrofundx.util.DocumentUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepo repository;

    public String uploadImage(MultipartFile file) throws IOException {

        Document imageData = repository.save(Document.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .imageData(DocumentUtil.compressImage(file.getBytes())).build());
        if (imageData != null) {
            return "file uploaded successfully : " + file.getOriginalFilename();
        }
        return null;
    }

    public byte[] downloadImage(String fileName){
        Optional<Document> dbImageData = repository.findByName(fileName);
        byte[] images=DocumentUtil.decompressImage(dbImageData.get().getImageData());
        return images;
    }
}