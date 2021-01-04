import React from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const BurgerState={
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    }
};


const BurgerBuilder = () => {
    
    
    return (
        <div>
            <Auxilliary>
                <Burger ingredients={BurgerState.ingredients}/>
                <BuildControls/>
            </Auxilliary>
        </div>
    )
}

export default BurgerBuilder;
