import { useParams, useHistory } from "react-router-dom";
import NavHeader from "./NavHeader";
import { View, FlatList } from "react-native-web";
import { categoryGifHandler } from "../store/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Gif from "../components/Gif";
import { gifAction } from "../store/slices/currentGifSlice";

const CategoryResult = () => {
  const category = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryGifHandler(category.categoryName));
  }, []);
  const data = useSelector((state) => state.category.categoryGif);

  const gifDetailHandler = (gif) => {
    gifAction.setCurrentGif(gif);
    history.push(`gif-detail/${gif.id}`);
  };

  const render = (itemData) => {
    return (
      <Gif
        key={itemData.item.id}
        source={itemData.item.images?.original.url}
        onClick={gifDetailHandler.bind(null, itemData.item)}
      />
    );
  };

  return (
    <View>
      <NavHeader />
      <FlatList
        data={data}
        renderItem={render}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

export default CategoryResult;
