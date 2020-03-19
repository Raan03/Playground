import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import styles from './layout.module.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    };

    render() {
        return (
            <Aux>
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer}
                />
                <ToolBar
                    drawerToggleClick={this.sideDrawerToggleHandler}
                />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux >
        );
    }
}

export default Layout;