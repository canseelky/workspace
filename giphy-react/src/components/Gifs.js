import React from "react";
import { useState, useEffect } from "react";
import Gif from "./Gif";
import classes from "./Gifs.module.css";
import NavHeader from "./NavHeader";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../store/slices/gifSlice";
import { gifAction } from "../store/slices/currentGifSlice";

const Gifs = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrending());
    setLoading(false);
  }, []);

  const gifs = useSelector((state) => state.gifs.gif);

  const history = useHistory();

  const gifDetailHandler = (gif) => {
    history.push(`/gif-detail/${gif.id}?url=${gif.images.original.url}`);
    dispatch(gifAction.setCurrentGif(gif));
  };

  return (
    <div className={classes.main}>
      <NavHeader />
      <p className={classes.txt}>Trending GIFs</p>
      <div className={classes.gif_container}>
        {!loading
          ? gifs?.map((gif) => {

              return (
                <Gif
                  key={gif.id}
                  source={gif.images.original.url}
                  onClick={gifDetailHandler.bind(null, gif)}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Gifs;
