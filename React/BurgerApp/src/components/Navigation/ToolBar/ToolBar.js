import React from 'react';
import classes from './ToolBar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const ToolBar = (props) => (
    <header className={classes.ToolBar}>
        <DrawerToggle clicked={props.drawerToggleClick} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems></NavigationItems>
        </nav>
    </header >
);

export default ToolBar;