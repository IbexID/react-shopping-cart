import React from 'react';
import cl from './Discount.module.scss'
const Discount = (props) => {
    return (
        <form className={cl.discount}>
            <label className={cl.discount__label}> Скидка
                <input className={cl.discount__input} 
                type="text" 
                value={props.discount}
                onChange={(e) =>{
                    if(e.target.value >=0 && e.target.value <=100 && e.target.value === String(Number(e.target.value))){
                        props.setDiscount(e.target.value);
                                      
                    }
                    if(e.target.value === '' || props.cartItems.length === 0){
                        props.setIsDiscountActive(false)
                        props.setDiscount('')
                    } 
                    console.log(props.discount) 
                }}
                placeholder='от 0 до 100' />
            </label>
            <div className={cl.discount__buttons}>
            <button 
            className={cl.discount__button}
            onClick={(e)=>{
                e.preventDefault();
                if(props.discount > 0){
                props.setIsDiscountActive(true)
                }
            }}
            >Установить скидку</button>

            <button 
            className={cl.discount__button}
            onClick={(e) => {
                e.preventDefault();
                props.setIsDiscountActive(false)
                props.setDiscount('')}
            }
            >Убрать скидки</button>
            </div>
        </form>
    );
};

export default Discount;