import React from 'react';
import classes from './ToolBar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const ToolBar = (props) => (
    <header className={classes.ToolBar}>
        <Logo />
        <nav>
            <NavigationItems></NavigationItems>
        </nav>
    </header >
);

export default ToolBar;