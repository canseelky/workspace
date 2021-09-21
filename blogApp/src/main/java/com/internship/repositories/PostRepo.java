package com.internship.repositories;

import com.internship.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepo extends JpaRepository<Post,Long> {
    @Override
    List<Post> findAll();
    @Override
    Post save(Post post);
    @Query( value="SELECT *  FROM post p WHERE p.id_post = :id" ,nativeQuery = true )
     Post findPostById(@Param("id") Long id);

    @Override
    Post saveAndFlush(Post post);

}
