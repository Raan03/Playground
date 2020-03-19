import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import styles from './layout.module.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    render() {
        return (
            <Aux>
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer}
                />
                <ToolBar></ToolBar>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux >
        );
    }
}

export default Layout;