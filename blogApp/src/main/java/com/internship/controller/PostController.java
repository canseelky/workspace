package com.internship.controller;

import com.internship.entities.Comment;
import com.internship.entities.Post;
import com.internship.repositories.CommentRepo;
import com.internship.services.IPostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;


@RestController
@CrossOrigin
public class PostController {
    @Autowired
    private IPostService mPostService;

    @Autowired
    private CommentRepo mCommentRepo;

    @GetMapping(value = "/posts")
    public ResponseEntity<List<Post>> getPosts(){
        return ResponseEntity.ok().body(mPostService.posts());
    }

    @GetMapping(value = "/findpost")
    public ResponseEntity<Post> getPostById(@RequestParam Long id){
        Post post = mPostService.getPostById(id);
        return ResponseEntity.ok().body(post);
    }

    @Transactional
    @PostMapping(value = "/addCommentToPost",
            produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Comment> getPostById(@RequestParam Long postId, @RequestParam int star,@RequestParam String content){
        Post post = mPostService.getPostById(postId);
        Comment comment = new Comment(null,star,content,post);
        post.getComments().add(comment);
        mPostService.save(post);
        return ResponseEntity.ok().body(comment);

    }


}
