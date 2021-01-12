import React, { useState } from 'react';
import Auxillary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


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
        totalPrice: 4
    });

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
        setState({ totalPrice: newPrice, ingredients: updatedIngredients });

    };

    const removeIngredientHandler = (type) => {
        const oldCount = state.ingredients[type];
        if (oldCount<=0){
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
        setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    };
    const disabledInfo={
        ...state.ingredients
    };
    for (let key in disabledInfo){
        disabledInfo[key]= disabledInfo[key]<=0
    };
    return (
        <Auxillary>
            <Burger ingredients={state.ingredients} />
            <BuildControls
            price={state.totalPrice}  
            ingredientAdded={addIngredientHandler} 
            ingredientDeducted={removeIngredientHandler} 
            disabled={disabledInfo}/>
        </Auxillary>

    );
};

export default BurgerBuilder;

