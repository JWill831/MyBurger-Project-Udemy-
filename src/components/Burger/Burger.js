import React from 'react'
import classes from './Burger.module.css'
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant';



const Burger = (props) => {
    const transformedIngredients=Object.keys(props.ingredients)
    .map(igKey=> {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngrediant key={igKey+i} type={igKey}/>
        });
    });

    return (
        <div className={classes.Burger}>

            <BurgerIngrediant type="bread-top"/>
            {transformedIngredients}
            <BurgerIngrediant type="bread-bottom"/>
            
        </div>
    )
}

export default Burger;
