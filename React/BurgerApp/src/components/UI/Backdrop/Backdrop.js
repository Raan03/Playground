import React from 'react';
import classes from './Backdrop.module.css';

const BackDrop = (props) => (
    props.showModal ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default BackDrop;