import React from 'react';
import logoImage from '../../assets/images/raan03.png';
import classes from './Logo.module.css';

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoImage} alt="logo" />
    </div>
)

export default Logo;