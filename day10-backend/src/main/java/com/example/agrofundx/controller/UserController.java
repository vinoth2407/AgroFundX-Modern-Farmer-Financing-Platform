package com.example.agrofundx.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.agrofundx.dto.request.ProfileEditRequest;
import com.example.agrofundx.model.User;
import com.example.agrofundx.service.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;



@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/get")
    public List<User>getUser(){
        return userService.getUser();
    }

    @GetMapping("/get/{email}")
    public User getUserByEmail(@PathVariable String email){
        return userService.getUserByEmail(email);
    }
    @PutMapping("/put/{email}")
    public boolean deleteFarmer(@RequestBody ProfileEditRequest request , @PathVariable String email){
        return userService.editUser(request , email);
    }

}
