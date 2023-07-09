import React from 'react';
import mealsimage from '../../assets/meals.jpg'
import classes from './Header.module.css';
import CartButton from './CartButton';

const Header = (props) =>{



    return <>
        <header className={classes.header} >
            <h1>ReactMeals</h1>
            <CartButton  onShowCart={props.onCartClick}></CartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimage}/>

        </div>
    
    </>
}
export default Header;