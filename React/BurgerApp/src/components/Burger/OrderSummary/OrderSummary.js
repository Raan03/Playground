import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log("OrderSummary updates");
    }
    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>
                            {igKey}
                        </span>
                : {this.props.ingredients[igKey]}
                    </li>
                )
            });

        return (<Aux>
            <h3>Your order</h3>
            <p>Selected ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total price: € {this.props.totalprice}</strong></p>
            <p>Order?</p>
            <Button
                clicked={this.props.cancelButton}
                btnType="Danger"
            >
                No
            </Button>
            <Button
                clicked={this.props.confirmButton}
                btnType="Success"
            >
                Yes
        </Button>
        </Aux >)
    }
}

export default OrderSummary;