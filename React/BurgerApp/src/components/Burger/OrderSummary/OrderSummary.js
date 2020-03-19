import React from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {igKey}
                    </span>
                : {props.ingredients[igKey]}
                </li>
            )
        });

    return (<Aux>
        <h3>Your order</h3>
        <p>Selected ingredients: </p>
        <ul>
            {ingredientsSummary}
        </ul>
        <p><strong>Total price: € {props.totalprice}</strong></p>
        <p>Order?</p>
        <Button
            clicked={props.cancelButton}
            btnType="Danger"
        >
            No
            </Button>
        <Button
            clicked={props.confirmButton}
            btnType="Success"
        >
            Yes
        </Button>
    </Aux>)
}

export default OrderSummary
    ;