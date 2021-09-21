package com.example.namedqueries.controller;

import com.example.namedqueries.entities.Post;
import com.example.namedqueries.repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostController {

    @Autowired
    PostRepo mPostRepo;

    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    public List<Post> getPosts(){

        return  mPostRepo.getAllPosts();
    }



}
