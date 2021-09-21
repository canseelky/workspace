package com.example.namedqueries.repository;

import com.example.namedqueries.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepo  extends JpaRepository<Post,Integer> {
    public List<Post> getAllPosts();
    public List<Post> findAll();
}
