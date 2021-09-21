import React from "react";
import waterfall from "../assets/waterfall.jpg";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={classes.entryHeader}>
        <div className={classes.homeContainer}>
          <div>
            <div className={classes.textContainer}>
              <h1 className={classes.entryTitle}>Start Here</h1>
              <p className={classes.entryContent}>
                Start Here Welcome to CaliforniaThroughMyLens.com! My name is
                Josh, and I am honored that you would take the time to explore
                California with me, my wife and my bulldog. My reason for
                creating this site is to spotlight all of the fantastic
                adventures California has to offer and to encourage people
                visiting to make the most of their trip and those that live here
                to take more time to explore our fantastic state.<br></br>
                <br></br> <br></br>I have been running this site for over six
                years, and I know it can be pretty overwhelming to get through
                the 1,300 posts on the site. Let me help you to get to know the
                website by showing you some of the best content and giving you
                some resources to engage with.
              </p>
              <h1 className={classes.entryTitle}>
                Step 1 – Join the Community
              </h1>
              <p className={classes.entryContent}>
                If you don’t have time to explore the website to its fullest
                right now, be sure to join the community by subscribing to the
                email newsletter and connecting with our social channels. This
                is a great way to follow along as we explore and document more
                places to explore in California.
              </p>
            </div>
          </div>

          <img className={classes.waterfallImage} src={waterfall}></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
