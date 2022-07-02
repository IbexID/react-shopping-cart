import React from 'react';
import Discount from './Discount';
import cl from './ItemInfo.module.scss'

const ItemInfo = ({cartItems}) => {
    const calculatePrice = (cartItems) =>{
        let calculatedPrice = 0;
        for (let i=0; i<cartItems.length; i++){
            calculatedPrice+= +cartItems[i].goodsPrice
        }
        return calculatedPrice;
    }
    let price = calculatePrice(cartItems)
    return (
        <div className={cl.itemInfo}>
            <Discount />
            <div className={cl.itemInfo__state}>
            <p className={cl.itemInfo__quantity}>Количество товаров в корзине: {cartItems.length}</p>
            <p className={cl.itemInfo__price}>Общая сумма: {price} ₽</p>
            </div>
        </div>
    );
};

export default ItemInfo;