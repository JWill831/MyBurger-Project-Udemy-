import React from 'react';
import Auxillary from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button';


const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{ testTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>;
        });
    
        // componentDidUpdate() {
        //     console.log('[OrderSummary], Will update');
        // };

    return (
        <Auxillary>
            <h3> Your Order</h3>
            <p>A delicious burder with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>TotalPrice: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Auxillary>
        
    );
};

export default OrderSummary;
