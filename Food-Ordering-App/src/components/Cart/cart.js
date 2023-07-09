import classes from './cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props)=>{

    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

    const hasItems = cartContext.items.length >0;

    const cartItemRemoveHandler = id =>{
        cartContext.removeItem(id);
    };

    const cartItemAddHandler = item =>{
        cartContext.addItem({...item,amount:1})
    };

    const Cartitems =<ul  className={['cart-items']}>
                            {cartContext.items.map(item=>
                            <CartItem key={item.id}
                                      amount ={item.amount}
                                       name ={item.name}
                                       price ={item.price}
                                       onRemove ={cartItemRemoveHandler.bind(null, item.id)}
                                       onAdd ={cartItemAddHandler.bind(null, item)}>
                            </CartItem>)} 
                    </ul>;
return<Modal onClose ={props.onClickClose}>
    {Cartitems}
    <div className={classes.total}> 
        <span>Total Amount</span>
        <span>{totalAmount}</span>
    </div>
     <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClickClose}>close</button>
         { hasItems && <button className={classes.button}>Order</button>}

     </div>
</Modal>

}

export default Cart;