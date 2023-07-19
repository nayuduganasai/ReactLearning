import classes from './cart.module.css';
import Modal from '../UI/Modal';
import React ,{ useState,useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './CheckOut';
import axios from "axios";

const Cart = (props)=>{

    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    let cartContext = useContext(CartContext);
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length >0;

    const cartItemRemoveHandler = id =>{
        cartContext.removeItem(id);
    };

    const cartItemAddHandler = item =>{
        cartContext.addItem({...item,amount:1})
    };

    const orderHandler =()=>{
        setIsCheckout(true);
    }

    const submitOrderHandler = async(userData)=>{
        setIsSubmitting(true);
        // await fetch("http://localhost:8080/orders/addorder",{
        //     method:'POST',
        //     body:JSON.stringify({
        //         user:userData,
        //         orderedItems:cartContext.items
        //     })
        // });

        axios.post("http://localhost:8080/orders/addorder",
                                {userdetails:userData,
                                orderedItems:cartContext.items})
                                .then((response)=>{
                                    console.log(userData)
                                })
        setIsSubmitting(false);
        setDidSubmit(true);
        cartContext = null;
    }

    const CartItems =<ul  className={['cart-items']}>
                            {cartContext.items.map(item=>
                            <CartItem key={item.id}
                                      amount ={item.amount}
                                       name ={item.name}
                                       price ={item.price}
                                       onRemove ={cartItemRemoveHandler.bind(null, item.id)}
                                       onAdd ={cartItemAddHandler.bind(null, item)}>
                            </CartItem>)} 
                    </ul>;

     const modalActions = (<div className={classes.actions}>
                            <button className={classes['button--alt']} onClick={props.onClose}>
                                Close
                            </button>
                            {hasItems && (
                                <button className={classes.button} onClick={orderHandler}>
                                Order
                                </button>
                            )}
                            </div>
                        );

    const cartModalContent = (
                                <React.Fragment>
                                {CartItems}
                                <div className={classes.total}>
                                    <span>Total Amount</span>
                                    <span>{totalAmount}</span>
                                </div>
                                {isCheckout && (
                                    <Checkout onConfirm={submitOrderHandler} onCancel={props.onClickClose} />
                                )}
                                {!isCheckout && modalActions}
                                </React.Fragment>
                            );

     const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
                                <React.Fragment>
                                <p>Successfully sent the order!</p>
                                <div className={classes.actions}>
                                <button className={classes.button} onClick={props.onClickClose}>
                                    Close
                                </button>
                                </div>
                                </React.Fragment>
                            );

return(
    <Modal onClose={props.onClickClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
);

}

export default Cart;