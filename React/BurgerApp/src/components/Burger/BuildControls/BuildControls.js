import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];


const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>€ {props.price}</strong></p>
        {
            controls.map(ctrl => <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                ingredientAdded={() => props.ingredientAdded(ctrl.type)}
                ingredientRemoved={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />)
        }
        <button className={classes.OrderButton}>Checkout</button>
    </div>

);

export default buildControls;