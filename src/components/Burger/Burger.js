import React from 'react'
import classes from './Burger.module.css'
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant';
const Burger = (props) => {


    return (
        <div className={classes.Burger}>
            <BurgerIngrediant type="bread-top"/>
            <BurgerIngrediant type="cheese"/>
            <BurgerIngrediant type="meat"/>
            <BurgerIngrediant type="bread-bottom"/>
            
        </div>
    )
}

export default Burger;
