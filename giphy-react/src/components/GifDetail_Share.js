import FavoriteIcon from "@material-ui/icons/Favorite";
import LinkIcon from "@material-ui/icons/Link";
import classes from "./GifDetail_Share.module.css";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const GifDetail_Share = ({ url }) => {
  const addToFavorites = () => {
    console.log("added to the favorites");
  };

  const copyClickBoard = () => {};

  return (
    <div className={classes.container}>
      <div onClick={addToFavorites} className={classes.favorite}>
        <FavoriteIcon className={classes.icon} />
        <p>Favorite</p>
      </div>

      <div onClick={copyClickBoard} className={classes.favorite}>
        <LinkIcon className={classes.icon} />
        <p>Copy link</p>
      </div>

      <div onClick={copyClickBoard} className={classes.favorite}>
        <ScreenShareIcon className={classes.icon} />
        <p>Media</p>
      </div>
      <div onClick={copyClickBoard} className={classes.favorite}>
        <NavigateBeforeIcon className={classes.icon} />
        <NavigateNextIcon className={classes.icon} />
        <p>Embed</p>
      </div>
      <div className={classes.share__point}>
        <p>Share It!</p>
        <WhatsAppIcon
          onClick={() => {
            window.location.href = `whatsapp://send?text=${url}`;
          }}
          className={classes.icon}
        />
      </div>
    </div>
  );
};

export default GifDetail_Share;
