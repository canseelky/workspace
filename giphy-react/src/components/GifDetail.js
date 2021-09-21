import NavHeader from "./NavHeader";
import { useSelector } from "react-redux";
import UserInfo from "./UserInfo";
import classes from "./GifDetail.module.css";
import GifDetail_Share from "./GifDetail_Share";

const GifDetail = (props) => {
  const gif = useSelector((state) => state.currentGif.gif);
  return (
    <div className={classes.GifDetail__main}>
      <NavHeader />
      <div className={classes.container__main}>
        <UserInfo gif={gif} />
        <div className={classes.detail__middle}>
          <p className={classes.title}>{gif.title}</p>
          <img src={gif.images.original.url}></img>
        </div>
        <div className={classes.share}>
          <GifDetail_Share url={gif.url} />
        </div>
      </div>
    </div>
  );
};

export default GifDetail;
