import React from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';

const BurgerBuilder = () => {
    return (
        <div>
            <Auxilliary>
                <Burger/>
                <div>Build Controls</div>
            </Auxilliary>
        </div>
    )
}

export default BurgerBuilder;
