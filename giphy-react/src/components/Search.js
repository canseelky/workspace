import { useState } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import classes from "./Search.module.css";
import { useDebouncedCallback } from "use-debounce";
import { getSearchResult } from "../store/slices/gifSlice";
import { useDispatch } from "react-redux";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const debouncedInputHandler = useDebouncedCallback((event) => {
    setSearchTerm(event.target.value);
    dispatch(getSearchResult(searchTerm));
  }, 2000);

  return (
    <div className={classes.input__area}>
      <input
        className={classes.main_input}
        placeholder="Search all the GIFs and Stickers"
        onChange={debouncedInputHandler}
      ></input>
      <SearchOutlinedIcon className={classes.searchIcon} />
    </div>
  );
};

export default Search;
