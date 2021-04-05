import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../../Store/ImageSlice";

const AddPictures = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [picSrc, setPicSrc] = useState("");
  const [Description, setDescription] = useState("");

  const mySubmitHandler = (event) => {
    event.preventDefault();
    event.target.children.title.value = "";
    event.target.children.url.value = ""; 
    event.target.children.description.value = ""; 
    dispatch(addImage({ id: nanoid(), title: title, userPic: picSrc,description: Description }));
    alert("Image Adedd Successfully");
  };

  return (
    <div className="main-Section">
      <p>please enter user Name</p>
      <form onSubmit={mySubmitHandler}>
        <input
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title Image"
        />
        <input
          type="url"
          name="url"
          value={picSrc}
          onChange={(e) => setPicSrc(e.target.value)}
          placeholder="Enter Link to the Image"
        />
        <label for="description">Add description:</label>
        <textarea
          id="description"
          name="description"
          rows="12"
          cols="50"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button>OK</button>
      </form>
    </div>
  );
};

export default AddPictures;
