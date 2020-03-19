import React from 'react';
import Aux from '../../hoc/Auxilary';
import styles from './layout.module.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        <SideDrawer />
        <ToolBar></ToolBar>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux >
);

export default layout;