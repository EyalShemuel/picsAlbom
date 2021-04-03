import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Image.module.css';

const image = (props) => {
  return (
    <div>
      <img src={props.src} alt="" className={styles.image, props.size === 'L'? styles.large : props.size === 'M'? styles.medume :styles.small}/>
    </div>
  );
};

export default image;
