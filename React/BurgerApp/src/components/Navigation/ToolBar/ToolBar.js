import React from 'react';
import classes from './ToolBar.module.css';

const ToolBar = (props) => (
    <header className={classes.ToolBar}>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
            <ul>
                <li>
                    L1
        </li>
                <li>
                    L2
        </li>
            </ul>
        </nav>
    </header>
);

export default ToolBar;