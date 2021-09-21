package com.example.namedqueries.entities;

import javax.persistence.*;

@Entity
@Table(name="post")
@NamedNativeQuery(name = "Post.getAllPosts", query="SELECT * FROM post",resultClass = Post.class)
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String title;
    private String content;

    @ManyToMany
    Comment comment;


    public Post() {

    }

    public Post( String title, String content) {

        this.title = title;
        this.content = content;
    }
    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }


    public void setId(int id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
