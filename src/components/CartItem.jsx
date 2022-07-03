import React from 'react';
import cl from './CartItem.module.scss'

const CartItem = (props) => {
    if (props.title) {
        return (
            <div className={cl.cartItem + ' ' + cl.cartItem__title}>
                <p className={cl.cartItem__count}></p>
                <p className={cl.cartItem__name}>Название</p>
                <p className={cl.cartItem__name}>Артикул</p>
                <p className={cl.cartItem__name}>Стоимость</p>
                
            </div>
        )
    } else
        return (
            <div className={cl.cartItem}>
                <p className={cl.cartItem__count}>{props.number}.</p>
                <p className={cl.cartItem__name}>{props.goodsName}</p>
                    <p className={cl.cartItem__number}>#{props.goodsNum}</p>
                    {props.isDiscountActive
                    ? <p className={cl.cartItem__price}><span className={cl['cartItem__price--strike']}>{props.goodsPrice} ₽</span> {props.goodsPrice - props.goodsPrice*props.discount/100} ₽</p>
                    : <p className={cl.cartItem__price}>{props.goodsPrice} ₽</p>
                    }
                
                <div className={cl.cartItem__buttonWrapper}
                    onClick={(e) => {
                        e.preventDefault()
                        props.removeCartItem(props.goodsNum, props.goodsName, props.goodsPrice)
                    }}>
                    <button className={cl.cartItem__button} ></button>
                </div>
            </div>
        );
};

export default CartItem;