import React from 'react';
import Aux from '../../../hoc/Auxilary';

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
        <p>Order?</p>
    </Aux>)
}

export default OrderSummary
    ;