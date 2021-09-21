import React, { useState } from "react";
import classes from "./Upload.module.css";
import { AiOutlineGif } from "react-icons/ai";
import axios from "axios";
const Upload = () => {
  const [file, setFile] = useState(null);
  const uploadFile = async (data) => {
    const send = await axios.post("http://upload.giphy.com/v1/gifs", {
      params: {
        api_key: `${process.env.REACT_APP_API_KEY}`,
        username: `${process.env.REACT_APP_USER_NAME}`,
        file: data,
      },
    });
  };
  const onFileUpload = (e) => {
    setFile(e.target.value[0]);

    if (file) {
      let data = new FormData();
      data.append("gif", file);
      uploadFile(file);
    }
  };
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/giphy.gif`}
        style={{
          height: "100%",
          width: "10%",
          marginLeft: "40%",
          marginBottom: "0",
        }}
      ></img>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          {" "}
          <h1
            style={{
              fontWeight: "bold",
              marginRight: "20px",
              marginLeft: "90px",
            }}
          >
            GIPHY
          </h1>
          <h1> Upload</h1>
        </div>
        <p style={{ color: "white", marginTop: "90px", marginLeft: "0px" }}>
          {" "}
          Upload your collection to share on Facebook, Twitter, Instagram, text
          message, email & everywhere else.
        </p>
        <div className={classes.inputContainer}>
          <AiOutlineGif className={classes.gif} size={50} />
          <p style={{ color: "white" }}> Upload a GIF,MP4 or MOV.</p>
          <label
            for="file-upload"
            className={classes.labelContainer}
            onChange={onFileUpload}
          >
            Choose File
          </label>
          <input type="file" id="file-upload" onChange={onFileUpload}></input>
        </div>
      </div>
    </div>
  );
};

export default Upload;
