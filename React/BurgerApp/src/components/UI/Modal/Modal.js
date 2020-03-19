import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxilary';
import BackDrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.showModal !== this.props.showModal;
    }
    componentWillUpdate() {
        console.log("Modal will update");
    }
    render() {
        return (<Aux>
            <BackDrop showModal={this.props.showModal} clicked={this.props.modalClosed}></BackDrop>
            <div
                className={classes.Modal}
                style={{
                    transform: this.props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.showModal ? '1' : '0'
                }}
            >
                {this.props.children}
            </div>

        </Aux>
        );
    }
}
export default Modal;