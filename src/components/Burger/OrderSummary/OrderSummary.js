import React from 'react';
import Auxillary from '../../../hoc/Auxilliary';
const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{ testTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>;
        });

    return (
        <Auxillary>
            <h3> Your Order</h3>
            <p>A delicious burder with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Auxillary>
        
    );
};

export default OrderSummary;
