import React, {useState} from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const BurgerBuilder = () => {
    const [burgerState, setBurgerState]=  useState(
        {
                ingredients: {
                    salad: 1,
                    bacon: 2,
                    cheese: 0,
                    meat: 0,
                },
                totalPrice: 4
            }
    );
    console.log("burgerState",burgerState)
    
    
    // setBurgerState = {
    //     ingredients: {
    //         salad: 0,
    //         bacon: 0,
    //         cheese: 0,
    //         meat: 0,
    //     },
    //     totalPrice: 4
    // };
    
    
    
    const INGREDIENT_PRICES= {
        salad:0.5,
        cheese:0.4,
        meat:1.3,
        bacon:0.7
    };
    
    const addIngredientHandler = (type)=>{
        const oldCount=burgerState.ingredients[type];
        const updateCount=oldCount+1;
        const updatedIngredients={
            ...burgerState.ingredients
        };
        updatedIngredients[type]=updateCount;
        const priceAddition= INGREDIENT_PRICES[type];
        const oldPrice=burgerState.totalPrice;
        const newPrice = oldPrice +priceAddition;
        setBurgerState({totalPrice: newPrice, indredients: updatedIngredients})
    
    }
    
    const removeIngredientHandler = (type)=>{
        
    }

    
    return (
        <div>
            <Auxilliary>
                <Burger ingredients={burgerState.ingredients}/>
                <BuildControls/>
            </Auxilliary>
        </div>
    )
}

export default BurgerBuilder;
