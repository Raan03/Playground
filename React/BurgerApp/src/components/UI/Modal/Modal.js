import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxilary';
import BackDrop from '../Backdrop/Backdrop';

const Modal = (props) => (
    <Aux>
        <BackDrop showModal={props.showModal} clicked={props.modalClosed}></BackDrop>
        <div
            className={classes.Modal}
            style={{
                transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.showModal ? '1' : '0'
            }}
        >
            {props.children}
        </div>

    </Aux>
);

export default Modal;