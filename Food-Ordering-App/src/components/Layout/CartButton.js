import React,{ useContext,useEffect, useState } from "react";
import classes from './CartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
const CartButton = (props) =>{

    const cartContext = useContext(CartContext);
    const[buttonHighlighted,setButtonHighlighted]=useState(false);
    const {items} = cartContext 

    const cartItems = items.reduce((curNum,item)=>{
                            return curNum+item.amount;
                        },0);

    const btnClasses = `${classes.button} ${buttonHighlighted? classes.bump:''}`

    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setButtonHighlighted(true);

        const timer = setTimeout(()=>{
            setButtonHighlighted(false)
        },300);

    return()=>{
        clearTimeout(timer);
    }
    },[items]);



    return <button className={btnClasses} onClick={props.onShowCart}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span> Your Cart</span>
        <span className={classes.badge}> {cartItems}</span>
    </button>
}

export default CartButton;