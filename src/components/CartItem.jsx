import React from 'react';
import cl from './CartItem.module.scss'

const CartItem = (props) => {
    return (
        <div className={cl.cartItem}>
            <p className={cl.cartItem__name}>{props.number}.</p>
            <p className={cl.cartItem__name}>{props.goodsNum}</p>
            <p className={cl.cartItem__name}>{props.goodsName}</p>
            <p className={cl.cartItem__name}>{props.goodsPrice} ₽</p>
            <div className={cl.cartItem__buttonWrapper}
            onClick={(e) => {
                e.preventDefault()
                props.removeCartItem(props.goodsNum)
            }}>
                <button className={cl.cartItem__button} ></button>
            </div>
        </div>
    );
};

export default CartItem;