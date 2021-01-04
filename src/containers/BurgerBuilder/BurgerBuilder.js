import React , {useState} from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';

// const [burgerState, setBurgerState]= new useState();
const BurgerState={
    ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
    }
};


const BurgerBuilder = () => {
    
    
    return (
        <div>
            <Auxilliary>
                <Burger ingredients={BurgerState.ingredients}/>
                <div>Build Controls</div>
            </Auxilliary>
        </div>
    )
}

export default BurgerBuilder;
