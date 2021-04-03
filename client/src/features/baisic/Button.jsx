import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Button.module.css';


const Button = (props) => {
  const dispatch = useDispatch();
    return (
        <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(`${props.command}`)}
        >
         { props.value}
        </button>
        
      </div>
    )
}

export default Button
