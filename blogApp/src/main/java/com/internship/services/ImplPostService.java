package com.internship.services;

import com.internship.entities.Post;
import com.internship.repositories.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ImplPostService  implements IPostService {

    @Autowired
    private PostRepo mPostRepo;

    public List<Post> posts(){
       return mPostRepo.findAll();
    }


    public Post save(Post post){
        return mPostRepo.saveAndFlush(post);
    }

    @Transactional()
    public Post getPostById(Long id){
        return mPostRepo.findPostById(id);
    }
}
