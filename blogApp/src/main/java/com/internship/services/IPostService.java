package com.internship.services;

import com.internship.entities.Post;

import java.util.List;

public interface IPostService {
    //void addPost(Post post);
    List<Post> posts();
    Post getPostById(Long id);
    Post save(Post post);

}
