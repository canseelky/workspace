package com.internship.services;

import com.internship.entities.Comment;

public interface ICommentService {
    void addCommentToPost(Comment comment, Long postId);
}
