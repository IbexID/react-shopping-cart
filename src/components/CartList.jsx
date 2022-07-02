import React from 'react';
import cl from './CartList.module.scss'
import CartItem from './CartItem';

const CartList = (props) => {
   
    return (
        <div className={cl.cartList}>
            <h4 className={cl.cartList__title}>Список товаров</h4>
            {!Object.entries(props.cartItems).length
            ? <p>Список пуст!</p>
            : props.cartItems.map( (item, i) =>{
                
                return (
                    <CartItem 
                    key={i} 
                    number={i+1} 
                    goodsNum={item.goodsNum} 
                    goodsName={item.goodsName} 
                    goodsPrice={item.goodsPrice} 
                    removeCartItem={props.removeCartItem}/>
                )
            })
            }
            
        </div>
    );
};

export default CartList;