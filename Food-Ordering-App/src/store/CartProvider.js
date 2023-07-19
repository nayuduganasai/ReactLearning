import CartContext from "./cart-context";
import { useReducer } from "react";


const defaultCartState = {
    items:[],
    totalAmount:0
};



const cartReducer = (state,action)=>{

    if(action.Identifier === 'ADD'){
        
        
        const existingCartItemIndex = state.items.findIndex(item=>item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItemsList;

        if(existingCartItem){
           const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount+action.item.amount
            }
            updatedItemsList = [...state.items];
            updatedItemsList[existingCartItemIndex] = updatedItem;
        }
        else{
            updatedItemsList = state.items.concat(action.item);
        }
        
        
        const newTotalAmount = state.totalAmount +(action.item.price*action.item.amount);
        return {
            items:updatedItemsList,
            totalAmount:newTotalAmount
        }

    }

    if(action.Identifier === 'REMOVE' ){
    
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingitem = state.items[existingCartItemIndex];
        const newTotalAmount = state.totalAmount - existingitem.price;
        let updatedItemsList;
        if(existingitem.amount === 1){
            updatedItemsList = state.items.filter(item =>item.id !== action.id);
        }else{
            const updatedItem = {...existingitem,amount:existingitem.amount -1}
            updatedItemsList = [...state.items];
            updatedItemsList[existingCartItemIndex] = updatedItem;
        }
        return{
            items:updatedItemsList,
            totalAmount:newTotalAmount
        }
    }

    if (action.type === 'CLEAR') {
    return defaultCartState;
  }

  return defaultCartState;

}
const CartProvider = (props)=>{

    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler = (item) =>{
        dispatchCartAction({Identifier:'ADD',
        item:item
    });

    }

    const removeItemFromCartHandler = (id)=>{
         dispatchCartAction({Identifier:'REMOVE',
        id:id
    });

    }

    const cartContext ={
            items:cartState.items,
            totalAmount:cartState.totalAmount,
            addItem:addItemToCartHandler,
            removeItem:removeItemFromCartHandler
            };

    return<CartContext.Provider  value ={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;