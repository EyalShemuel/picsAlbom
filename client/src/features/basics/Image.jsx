// eslint-disable-next-line
import React, { useState } from "react";
// eslint-disable-next-line
import { useSelector, useDispatch } from "react-redux";
import styles from "./Image.module.css";

const image = (props) => {
  return (
    <div>
      <img
        src={props.src}
        alt=""
        className={
          (styles.image,
          props.size === "L"
            ? styles.large
            : props.size === "M"
            ? styles.medume
            : styles.small)
        }
        style={{borderRadius:props.radius}}
      />
    </div>
  );
};

export default image;
