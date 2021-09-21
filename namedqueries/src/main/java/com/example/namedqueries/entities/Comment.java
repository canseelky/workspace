package com.example.namedqueries.entities;

import javax.persistence.*;

@Entity
@Table(name="comment")

public class Comment {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String comment;


    public Comment() {
    }


    public Comment(String comment) {
        this.comment = comment;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

}
