import React from "react";
import "../styles/styles.css";
import TextField from "@mui/material/TextField";

const SearchBox = () => {
  return (
    <div className="search">
      <h1>React Search</h1>
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="type Pokemon name"
      />
    </div>
  );
};

export default SearchBox;
