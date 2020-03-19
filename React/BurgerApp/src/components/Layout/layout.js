import React from 'react';
import Aux from '../../hoc/Auxilary';
import styles from './layout.module.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';

const layout = (props) => (
    <Aux>
        <ToolBar></ToolBar>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux >
);

export default layout;