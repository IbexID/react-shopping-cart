import React from 'react';
import Discount from './Discount';
import cl from './ItemInfo.module.scss'

const ItemInfo = (props) => {
    const calculatePrice = (cartItems) =>{
        let calculatedPrice = 0;
        for (let i=0; i<cartItems.length; i++){
            calculatedPrice+= +cartItems[i].goodsPrice
        }
        return calculatedPrice;
    }
    let price = calculatePrice(props.cartItems)
    
    return (
        <div className={cl.itemInfo}>
            <Discount 
            cartItems={props.cartItems}
            discount={props.discount} 
            setDiscount={props.setDiscount} 
            isDiscountActive={props.isDiscountActive} 
            setIsDiscountActive={props.setIsDiscountActive}/>

            <div className={cl.itemInfo__state}>
            <p className={cl.itemInfo__quantity}>Количество товаров в корзине: {props.cartItems.length}</p>
            {props.isDiscountActive
            ? <p className={cl.itemInfo__price}>Общая сумма: <span className={cl['itemInfo__price--strike']}>{price} ₽</span> {price - price*props.discount/100} ₽</p>
            : <p className={cl.itemInfo__price}>Общая сумма: {price} ₽</p>}
            
            </div>
        </div>
    );
};

export default ItemInfo;