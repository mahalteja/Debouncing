import { TextField, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";

import "./AddBlog.css";

function AddBlog() {
  const [blogData, setBlogData] = useState({});
  function handleChange(e) {
    setBlogData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  useEffect(() => {
    const getData = setTimeout(() => {
      console.log(blogData);
    }, 1000);
    return () => clearTimeout(getData);
  }, [blogData]);

  return (
    <div className="container">
      <div className="content">
        <div className="data-content">
          <Typography
            variant="span"
            color="#000000"
            fontSize={"48px"}
            fontWeight="700"
            fontFamily="Montserrat"
          >
            Write Your Blog
          </Typography>
        </div>

        <Typography
          variant="span"
          color="rgba(26, 18, 11, 0.90)"
          fontSize={"32px"}
          fontWeight="700"
          fontFamily="Montserrat"
          name="heading"
        >
          Blog Heading
        </Typography>

        <TextField
          className="input-text"
          label="Blog Heading"
          variant="outlined"
          size="small"
          type="text"
          onChange={handleChange}
        ></TextField>
        <Typography
          variant="span"
          color="rgba(26, 18, 11, 0.90)"
          fontSize={"32px"}
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Sub Heading
        </Typography>

        <TextField
          className="input-text"
          label="Enter Subheading"
          variant="outlined"
          size="small"
          type="text"
          name="subheading"
          onChange={handleChange}
        ></TextField>
        <Typography
          variant="span"
          color="rgba(26, 18, 11, 0.90)"
          fontSize={"32px"}
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Content
        </Typography>

        <TextField
          className="input-text"
          label="Enter your content"
          multiline
          rows={4}
          variant="outlined"
          size="small"
          type="text"
          name="content"
          onChange={handleChange}
        ></TextField>

        <div className="button-div">
          <button className="btn" type="submit">
            Post Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
