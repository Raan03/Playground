import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Aux from '../../../hoc/Auxilary';
import BackDrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {

    return (
        <Aux>
            <BackDrop showModal={props.open} clicked={props.closed} />
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    );
}

export default SideDrawer;