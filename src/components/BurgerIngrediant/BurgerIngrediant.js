import classes from '*.module.css';
import React from 'react'
import classes from '../BurgerIngrediant/BurgerIngrediant.module.css'

const BurgerIngrediant = (props) => {
    ingrediant =null;
    switch(props.type){
        case ('bread-bottom'):
            ingrediant= <div className={classes.BreadBottom}></div>;
            break
        
        case ('bread-top'):
            ingrediant= <div className={classes.BreadTop}>
                <div className={classes.Sees1}></div>
                <div className={classes.Sees2}></div>
            </div>;
            break

        case('meat'):
        ingreadiant=<div className={classes.Meat}></div>
            break
        
        case('cheese'):
        ingreadiant=<div className={classes.Cheese}></div>
            break

        case('salad'):
        ingreadiant=<div className={classes.Salad}></div>
            break
        
        case('bacon'):
        ingreadiant=<div className={classes.Bacon}></div>
            break

                };
        
                


    return (
        <div>
            
        </div>
    )
}

export default BurgerIngrediant;
