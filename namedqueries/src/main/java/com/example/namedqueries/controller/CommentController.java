package com.example.namedqueries.controller;

import com.example.namedqueries.entities.Comment;
import com.example.namedqueries.repository.CommentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CommentController {

    @Autowired
    private CommentRepo mCommentRepo;


    @RequestMapping(value = "/comment",method = RequestMethod.GET)
    public String getCommentForPost(){

        return "Comments";

    }
}
