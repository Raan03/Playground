import React, { Component } from "react";
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};
const MAX_GLOBAL_INGREDIENTS = 10;
const MAX_TYPE_INGREDIENT = 3;

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        // limit to ten
        const updatedCounted = Math.min(oldCount + 1, MAX_TYPE_INGREDIENT);
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = Math.round((oldPrice + priceAddition) * 100) / 100;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        // at least 0
        const updatedCounted = Math.max(oldCount - 1, 0);
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;

        const priceDeducted = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = Math.round((oldPrice - priceDeducted) * 100) / 100;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    };

    calculateCount(obj) {
        let sum = 0;
        for (let key in obj) {
            sum += obj[key];
        }

        return sum;
    }
    render() {
        let disableInfo = {
            ...this.state.ingredients
        };

        const limitReached = this.calculateCount(disableInfo) >= MAX_GLOBAL_INGREDIENTS;

        for (let key in disableInfo) {
            disableInfo[key] =
            {
                amount: disableInfo[key],
                disableAdd: disableInfo[key] >= MAX_TYPE_INGREDIENT || limitReached,
                disableRemove: disableInfo[key] <= 0
            }
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice.toFixed(2)}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;