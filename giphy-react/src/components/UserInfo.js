import classes from "./UserInfo.module.css";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useState } from "react";
const UserInfo = ({ gif }) => {
  const user = gif.user;
  const [isReadMore, setReadMore] = useState(false);
  const toggleReadMore = () => {
    setReadMore(!isReadMore);
  };

  return (
    <div className={classes.userInfo_container}>
      <div className={classes.userInfo__header}>
        <img className={classes.profile__image} src={user?.avatar_url}></img>;
        <div className={classes.text_container}>
          <h5 className={classes.display_name}>{user?.display_name}</h5>
          <div className={classes.userTag}>
            <h5 className={classes.username}>{user?.username}</h5>
            {user?.is_verified ? (
              <VerifiedUserOutlinedIcon className={classes.verified} />
            ) : null}
          </div>
        </div>
      </div>
      <p className={classes.description}>
        {isReadMore ? user?.description : user?.description.slice(0, 150)}
      </p>
      <p className={classes.description}>
        Read more
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
      {gif.source ? (
        <p
          className={classes.description}
          onClick={() => {
            window.location.href = gif.source;
          }}
        >
          Source {gif.source}
        </p>
      ) : null}
      <p className={classes.follow_on}>Follow on:</p>
      <div className={classes.socialNetwork}>
        <InstagramIcon
          onClick={() => {
            window.location.href = user?.website_url;
          }}
          className={classes.icon}
        />
        <FacebookIcon
          onClick={() => {
            window.location.href = user?.website_url;
          }}
          className={classes.icon}
        />
        <TwitterIcon
          onClick={() => {
            window.location.href = user?.website_url;
          }}
          className={classes.icon}
        />
      </div>
    </div>
  );
};

export default UserInfo;
