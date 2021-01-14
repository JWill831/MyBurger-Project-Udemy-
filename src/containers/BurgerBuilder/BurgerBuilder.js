import React, { useState } from 'react';
import Auxillary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};
const BurgerBuilder = (props) => {

    const [state, setState] = useState({
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    });

    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        if (sum > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    // const updatedPerchaseState = () => Object.values(ingridents).reduce((s,el) => s+el) > 0;
    const addIngredientHandler = (type) => {
        const oldCount = state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        updatePurchaseState(updatedIngredients);
        setState({ totalPrice: newPrice, ingredients: updatedIngredients, purchasable: updatePurchaseState(updatedIngredients) });

    };

    const removeIngredientHandler = (type) => {
        const oldCount = state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
            ...state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        updatePurchaseState(updatedIngredients);
        setState({ totalPrice: newPrice, ingredients: updatedIngredients, purchasable: updatePurchaseState(updatedIngredients) });

    };
    const disabledInfo = {
        ...state.ingredients
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    };
    
    
    const purchaseHandler = () => {
        const tempState = state
        setState({ ...tempState, purchasing: true });
    };
    console.log('state', state)

    return (
        <Auxillary>
            <Modal show={state.purchasing}>
                <OrderSummary ingredients={state.ingredients} />
            </Modal >
            <Burger ingredients={state.ingredients} />
            <BuildControls
                price={state.totalPrice}
                ingredientAdded={addIngredientHandler}
                ingredientDeducted={removeIngredientHandler}
                ordered={purchaseHandler}
                purchasable={state.purchasable}
                disabled={disabledInfo} />
        </Auxillary>

    );
};

export default BurgerBuilder;

